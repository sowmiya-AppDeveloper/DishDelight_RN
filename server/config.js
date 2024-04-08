module.exports = {
  apps: [
    {
      name: "DishDelight",
      script: "index.js", // your script
      env: {
        NODE_ENV: "production",
        // PORT: 3001,
        DATABASE: "mongodb://127.0.0.1:27017/FoodRecipes",
        JWT_SECRET: some_secret_letters_numbers,
        SENDGRID_KEY:
          "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",
        EMAIL_FROM: "sowmiya@betamonks.com",
        CLOUDINARY_NAME: dilek4l9h,
        CLOUDINARY_KEY: 719417531266154,
        CLOUDINARY_SECRET: ApFzVfmGBK - L1Q9boSO_46xCdf0,
        STRIPE_SECRET_KEY:
          sk_test_51OeXjwSBwPh1XcIUR6VMykWqzT8VynbHtNTFjyaq2V6iTcHKmrMeKOPi5jAlB7XXLhcbtgQvf6bbYl3EaO9FhUfu00quY2ZMR0,
      },
    },
  ],
};
