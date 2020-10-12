import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NumericInput from 'react-native-numeric-input';

export default function App() {
  const [height, setHeight] = useState(0.1);
  const [weight, setWeight] = useState(1);
  const [imc, setImc] = useState(0);

  useEffect(() => {
    const calcIMC = () => {
      return weight / Math.pow(height, 2);
    };
    setImc(calcIMC().toFixed(2));
  }, [height, weight]);

  const handleChangeHeight = (value) => {
    setHeight(value);
  };

  const handleChangeWeight = (value) => {
    setWeight(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Altura (m)</Text>
      <NumericInput
        step={0.1}
        minValue={0.1}
        maxValue={3.0}
        totalWidth={240}
        totalHeight={50}
        rightButtonBackgroundColor="green"
        leftButtonBackgroundColor="red"
        valueType="real"
        value={height}
        onChange={handleChangeHeight}
      />
      <Text style={styles.text}>Peso (kg)</Text>
      <NumericInput
        step={1}
        minValue={1.0}
        maxValue={300.0}
        totalWidth={240}
        totalHeight={50}
        rightButtonBackgroundColor="green"
        leftButtonBackgroundColor="red"
        valueType="real"
        value={weight}
        onChange={handleChangeWeight}
      />
      <Text style={styles.textIMC}>IMC: {imc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textIMC: {
    fontSize: 25,
    marginTop: 10,
  },
  text: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 5,
  },
});
