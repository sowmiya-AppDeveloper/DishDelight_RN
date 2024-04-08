const User = require("../models/user");
const Recipe = require("../models/RecipeDetails");
const favRecipe = require("../models/FavoriteRecipe");
const categoriesRecipeSchema = require("../models/CategoriesRecipes");
const ratings = require("../models/Ratings");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");
const nanoid = require("nanoid");
const expressJwt = require("express-jwt");
const cloudinary = require("cloudinary");
const multer = require("multer");
const Stripe = require("stripe");

const express = require("express");
const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const ImageModal = require("../models/ImageModal");
const path = require("path");
const fs = require("fs");
const upload = multer();

// sendgrid
const sgMail = require("@sendgrid/mail");
const user = require("../models/user");
const { error } = require("console");

sgMail.setApiKey(process.env.SENDGRID_KEY);

//cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});
//middleware
exports.requireSignIn = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
});
exports.signup = async (req, res) => {
  console.log("HIT SIGNUP");
  try {
    // validation
    const { name, email, password } = req.body;
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }
    if (!email) {
      return res.json({
        error: "Email is required",
      });
    }
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be 6 characters long",
      });
    }
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({
        error: "Email is taken",
      });
    }
    // hash password
    const hashedPassword = await hashPassword(password);

    try {
      const user = await new User({
        name,
        email,
        password: hashedPassword,
      }).save();

      // create signed token
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "3d",
      });

      //   console.log(user);
      const { password, ...rest } = user._doc;
      return res.json({
        status: "success",
        data: rest,
        token,
      });
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
};

exports.signin = async (req, res) => {
  console.log(req.body);
  try {
    const { email, password } = req.body;
    // check if our db has user with that email
    const user = await User.findOne({ email }).maxTimeMS(20000);
    console.log("user", user);

    if (!user) {
      return res.json({
        error: "No user found",
      });
    }
    // check password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.json({
        error: "Wrong password",
      });
    }
    // create signed token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });

    user.password = undefined;
    user.secret = undefined;
    var data = user;
    res.json({
      status: "success",
      data,
      token,
    });
  } catch (err) {
    console.log(err);
    console.log("There is an error22", err);
    return res.status(400).send("Error. Try again.");
  }
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  // find user by email
  const user = await User.findOne({ email });
  console.log("USER ===> ", user);
  if (!user) {
    return res.json({ error: "User not found" });
  }
  // generate code
  const resetCode = nanoid(5).toUpperCase();
  // save to db
  user.resetCode = resetCode;
  user.save();
  // prepare email
  const emailData = {
    from: process.env.EMAIL_FROM,
    to: user.email,
    subject: "Password reset code",
    html: `<h4>Enter this code in the app to reset password</h4>
     <h1 style="color:red;"> ${resetCode}</h1>`,
  };
  // send email
  try {
    const data = await sgMail.send(emailData);
    console.log(data);
    res.json({ status: "success", data: { ok: true } });
  } catch (err) {
    res.json({ ok: false });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { email, password, resetCode } = req.body;
    // find user based on email and resetCode

    const user = await User.findOne({ email, resetCode });
    console.log("resetPassword", user);

    // if user not found
    if (!user) {
      return res.json({ error: "Email or reset code is invalid" });
    }
    // if password is short
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be 6 characters long",
      });
    }
    // hash password
    const hashedPassword = await hashPassword(password);
    user.password = hashedPassword;
    user.resetCode = "";
    user.save();
    return res.json({ status: "success", ok: true });
  } catch (err) {
    console.log(err);
  }
};

exports.uploadImage = async (req, res) => {
  try {
    const storage = multer.diskStorage({
      destination: "/home/bi1466/sowmiya/DisDelightAssets",
      filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        console.log("uploadImage", file.originalname);

        const ext = path.extname(file.originalname);
        console.log("uploadImage22", ext);

        cb(null, uniqueSuffix + ext);
      },
    });

    const upload = multer({ storage: storage }).single("imageFile");

    upload(req, res, async (err) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ status: "error", message: "Image upload failed" });
      } else {
        try {
          const existingData = await ImageModal.findOne({
            userId: req.body._id,
          });

          if (!existingData) {
            // If the document with the specified userId doesn't exist, create a new one
            const newData = new ImageModal({
              userId: req.body._id,
              Image: {
                data: req.file.filename,
                contentType: req.file.mimetype,
              },
            });

            await newData.save();

            res.json({
              status: "success",
              message: "Image uploaded successfully",
            });
          } else {
            // If the document already exists, update its image.url
            await ImageModal.findOneAndUpdate(
              { userId: req.body._id },
              {
                Image: {
                  data: req.file.filename,
                  contentType: req.file.mimetype,
                },
              },
              { new: true } // Set to true to return the modified document
            );
            res.json({
              status: "success",
              message: "Image updated successfully",
            });
          }
        } catch (error) {
          // Handle errors here
          console.error(error);
          res.status(500).json({
            status: "error",
            message: "Internal server error",
          });
        }
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

exports.getUserImage = async (req, res) => {
  try {
    const userId = req.body.id;

    // Retrieve user details from MongoDB based on the provided user ID
    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }

    const image = await ImageModal.findOne({ userId: req.body.id });

    if (!image) {
      return res.json({
        status: "success",
        message: "Image not found",
        data: "no image",
      });
    }
    // Assuming the image data is stored in 'data' field of the image document
    const imageUrl = image.Image.data;

    res.json({ status: "success", data: imageUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: "error", message: "Internal server error" });
  }
};

exports.updatePassword = async (req, res) => {
  try {
    const { password } = req.body;

    if (password && password.length < 6) {
      return res.json({
        error: "Password is required and should be min 6 character long",
      });
    } else {
      const hashedPassword = await hashPassword(password);
      console.log("IMAGE UPLOADED SUCCESSFULLY=====>", hashedPassword);
      const data = await User.findByIdAndUpdate(req.user._id, {
        password: hashedPassword,
      });
      console.log("updatePassword", data);
      user.password = undefined;
      user.secret = undefined;
      return res.json(user);
    }
  } catch (error) {
    console.log(error);
  }
};

exports.insertMyRecipes = async (req, res) => {
  try {
    if (req.body.Recipes) {
      // Assuming req.body.Recipes is an array of recipe objects
      const insertedRecipes = await Recipe.insertMany(req.body.Recipes);

      // Return the inserted recipes as a response
      return res.json(insertedRecipes);
    } else {
      // Assuming req.body.Recipes is an array of recipe objects
      const insertedRecipes = await categoriesRecipeSchema.insertMany(
        req.body.categoriesRecipes
      );

      // Return the inserted recipes as a response
      return res.json(insertedRecipes);
    }
  } catch (error) {
    console.log(error);

    // Handle the error and send an appropriate response
    return res
      .status(500)
      .json({ error: "An error occurred while inserting recipes." });
  }
};
exports.getAllRecipes = async (req, res) => {
  try {
    const data = await Recipe.find({});
    return res.json({ status: "success", data });
  } catch (error) {
    console.log(error);
  }
};
exports.getAllCategoriesRecipes = async (req, res) => {
  try {
    const data = await categoriesRecipeSchema.find({});
    return res.json({ status: "success", data });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteRecipes = async (req, res) => {
  try {
    const filter = {
      title: { $in: req.body.Recipes.map((recipe) => recipe.title) },
    };
    console.log("filter", filter);

    const insertedRecipes = await Recipe.deleteMany(filter);
    console.log("insertedRecipes insertedRecipes", insertedRecipes);
    // Return the inserted recipes as a response
    return res.json(insertedRecipes);
  } catch (error) {
    console.log(error);

    // Handle the error and send an appropriate response
    return res
      .status(500)
      .json({ error: "An error occurred while inserting recipes." });
  }
};

exports.updateRating = async (req, res) => {
  try {
    const productId = req.body.productId;
    const ratingValue = req.body.rating;
    const userId = req.body.userId;
    const review = req.body.reviews;
    const name = req.body.name;
    const userImage = req.body.userImage;
    if (typeof ratingValue !== "number") {
      res.status(400).json({ message: "Invalid rating value" });
      return;
    }

    const ratingDocument = {
      productId: productId,
      rating: ratingValue,
      userId: userId,
      reviews: review,
      name: name,
      userImage: userImage,
    };

    console.log("Total Rating for Product", productId);
    const data = await ratings.insertMany(ratingDocument);
    return res.json({ status: "success", data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.getRatings = async (req, res) => {
  try {
    // Step 1: Group and calculate the average rating and rating count for each product
    const aggregatedData = await ratings.aggregate([
      {
        $group: {
          id: "$productId",
          averageRating: { $avg: "$rating" },
        },
      },
    ]);

    for (const data of aggregatedData) {
      const productId = data.id || data.id;

      const averageRating = parseFloat(data.averageRating.toFixed(2)); // Round to 2 decimal places

      const existingProduct = await categoriesRecipeSchema.findById(productId);

      if (existingProduct) {
        await categoriesRecipeSchema.findByIdAndUpdate(productId, {
          $set: { rating: averageRating },
        });
      } else {
        console.error(`Product with id ${productId} not found.`);
      }
    }

    const updatedProducts = await categoriesRecipeSchema.find({});

    return res.json({ status: "success", data: updatedProducts });
  } catch (error) {
    console.error("Error:", error);
  }
};

exports.getAllReview = async (req, res) => {
  try {
    const reviews = await ratings.find({ productId: req.body.productId });
    if (reviews.length === 0) {
      return res.json({ status: "success", data: [] });
    }

    res.json({ status: "success", data: reviews });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
exports.getRecommendedRating = async (req, res) => {
  try {
    // Step 1: Group and calculate the average rating and rating count for each product
    const aggregatedData = await ratings.aggregate([
      {
        $group: {
          id: "$productId",
          averageRating: { $avg: "$rating" },
        },
      },
    ]);

    for (const data of aggregatedData) {
      const productId = data.id;
      const averageRating = parseFloat(data.averageRating.toFixed(2)); // Round to 2 decimal places
      const existingProduct = await Recipe.findById(productId);

      if (existingProduct) {
        await Recipe.findByIdAndUpdate(productId, {
          $set: { rating: averageRating },
        });
      } else {
        console.error(`Product with id ${productId} not found.`);
      }
    }

    const updatedProducts = await Recipe.find({});
    console.log("averageRating", updatedProducts);
    return res.json({ status: "success", data: updatedProducts });
  } catch (error) {
    console.error("Error:", error);
  }
};
exports.getSingleRecipe = async (req, res) => {
  console.log("getSingleRecipe11", req.body.recipeId);
  try {
    const data = await categoriesRecipeSchema.findById(req.body.recipeId);
    console.log("getSingleRecipe22", data);

    return res.json({ status: "success", data });
  } catch (error) {
    console.log("error", error);
  }
};
exports.paymentProcess = async (req, res) => {
  try {
    console.log("PAYMENT===================>", req.body);
    const data = req.body.name;
    if (!data)
      return res.status(400).json({ message: "Please enter your name" });
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(25 * 100),
      currency: "INR",
      payment_method_types: ["card"],
      metadata: { data },
    });
    const clientSecret = paymentIntent.client_secret;
    res.json({ message: "payment initiated", clientSecret });
  } catch (error) {
    console.log(error);
  }
};

exports.favoriteRecipes = async (req, res) => {
  try {
    if (req.body.status === "routineItem") {
      const existingRecipe = await favRecipe.findOne({ id: req.body.recipeId });

      if (existingRecipe) {
        // Recipe already exists in favorites, handle accordingly (e.g., send a message)
        return res.json({
          status: "error",
          message: "Recipe already in favorites",
        });
      }

      const getRec = await Recipe.findById(req.body.recipeId);
      console.log("favoriteRecipesgetRec", getRec);

      if (!getRec) {
        return res.json({ status: "error", message: "Recipe not found" });
      }

      const recipeDocument = {
        id: getRec.id,
        title: getRec.title,
        ingredients: getRec.ingredients,
        instructions: getRec.instructions,
        image: getRec.image,
        name: getRec?.name,
        userId: req.body.userId,
      };

      const data = await favRecipe.create(recipeDocument);
      console.log("responseData", data);

      return res.json({ status: "success", data });
    } else {
      console.log("existingRecipereq.body.recipeId", req.body.recipeId);

      const existingRecipe = await favRecipe.findOne({ id: req.body.recipeId });
      console.log("existingRecipe", existingRecipe);

      if (existingRecipe) {
        // Recipe already exists in favorites, handle accordingly (e.g., send a message)
        return res.json({
          status: "error",
          message: "Recipe already in favorites",
        });
      }

      const getRec = await categoriesRecipeSchema.findById(req.body.recipeId);

      if (!getRec) {
        return res.json({ status: "error", message: "Recipe not found" });
      }
      console.log("responseData22222222222", getRec);
      const recipeDocument = {
        id: getRec.id,
        title: getRec.title,
        ingredients: getRec.ingredients,
        instructions: getRec.instructions,
        image: getRec.image,
        name: getRec?.name,
        userId: req.body.userId,
      };

      const data = await favRecipe.create(recipeDocument);

      return res.json({ status: "success", data });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
};

exports.getFavRecipes = async (req, res) => {
  try {
    const data = await favRecipe.findById({ id: req.body.userId }).lean(); // Use lean() to convert to plain JavaScript objects
    console.log("getRecipes", data);
    return res.json({ status: "success", data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", message: "Internal Server Error" });
  }
};
