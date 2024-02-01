import {
  Alert,
  Button,
  LogBox,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  PlatformPay,
  PlatformPayButton,
  confirmPlatformPayPayment,
  usePlatformPay,
  useStripe,
} from '@stripe/stripe-react-native';
import {testingUrl} from '../Common/constant';

const PaymentScreen = () => {
  const [name, setName] = useState('');
  const stripe = useStripe();
  const {isPlatformPaySupported} = usePlatformPay();

  useEffect(() => {
    (async function () {
      if (!(await isPlatformPaySupported({googlePay: {testEnv: true}}))) {
        Alert.alert('Google Pay is not supported.');
        return;
      }
    })();
  }, []);

  const fetchPaymentIntentClientSecret = async () => {
    // Fetch payment intent created on the server, see above
    const response = await fetch(testingUrl + 'pay', {
      method: 'POST',
      body: JSON.stringify({name}),
      headers: {
        'content-Type': 'application/json',
      },
    });
    const data = await response.json();
    const clientSecret = data.clientSecret;

    return clientSecret;
  };

  const pay = async () => {
    const clientSecret = await fetchPaymentIntentClientSecret();

    const {error} = await confirmPlatformPayPayment(clientSecret, {
      googlePay: {
        testEnv: true,
        merchantName: 'My merchant name',
        merchantCountryCode: 'US',
        currencyCode: 'USD',
        billingAddressConfig: {
          format: PlatformPay.BillingAddressFormat.Full,
          isPhoneNumberRequired: true,
          isRequired: true,
        },
      },
    });

    if (error) {
      console.log('Payment Error:', error);
      Alert.alert('Payment Failed', ` Message: ${error.message}`);
      return;
    } else {
    }

    Alert.alert('Success', 'The payment was confirmed successfully.');
  };

  const subscribe = async () => {
    try {
      //sending req

      const response = await fetch(testingUrl + 'pay', {
        method: 'POST',
        body: JSON.stringify({name}),
        headers: {
          'content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log('responseDataForfirst===>', data);
      if (!response.ok) return Alert.alert('HIIi', data.message);
      const clientSecret = data.clientSecret;
      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        merchantDisplayName: name,
        paymentOption: 'automatic',
      });

      if (initSheet.error)
        return Alert.alert('nnnnnnnnnnnn', initSheet.error.message);
      const presentSheet = await stripe.presentPaymentSheet({
        clientSecret,
      });

      if (presentSheet.error)
        return Alert.alert('hello', presentSheet.error.message);
      Alert.alert('your payment is complete,thank you!');
    } catch (error) {
      console.log(error);
      Alert.alert('Something went wrong');
    }
  };
  return (
    <View>
      <TextInput
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Name"
        style={{borderWidth: 1, width: 300, fontSize: 20, padding: 10}}
      />
      <Button title="Subscribe-25 INR" onPress={subscribe} />
      <PlatformPayButton
        type={PlatformPay.ButtonType.Pay}
        onPress={pay}
        style={{
          width: '100%',
          height: 50,
        }}
      />
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});
