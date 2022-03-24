import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image } from 'react-native';

export function MainPage(){
	return (
		<View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={{
                uri: 'https://w7.pngwing.com/pngs/672/449/png-transparent-sneakers-shoe-graphy-others-white-logo-monochrome.png',
                }}
            />
		    <Text>Hello Guys!</Text>
		    <TextInput
                style={styles.input}
                placeholder="Enter your shoes type"
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Enter your shoes color"
                keyboardType="numeric"
            />
            <Button
                title="submit"
                color="#000"
                onPress={() => Alert.alert('thanks for your order!')}
            />
            <StatusBar style="auto" />
		</View>
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
});

export default MainPage;