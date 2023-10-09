import react, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

function App() {
  const [total, setTotal] = useState('');
  const handleButtononPress = (value: String) => {
    if (value === 'c') {
      setTotal('');
    } else if (value === 'back') {
      setTotal(total.slice(0, 1));
    } else if (value === '=') {
      try {
        const result = eval(total);
        setTotal(String(result));
      } catch (error) {
        setTotal('error');
      }
    } else if (value === '+') 
    {
      setTotal(total + '+');

    }
    else if (value === '-') 
    {
      setTotal(total + '-');

    }
    else if (value === '*') 
    {
      setTotal(total + '*');

    }
    else if (value === '/') 
    {
      setTotal(total + '/');

    }
    else{
      setTotal(total + value)
    }
  };

  return (
    <SafeAreaView style={style.main}>
      <TextInput
        style={style.screen}
        showSoftInputOnFocus={false}
        value={total}></TextInput>

      <View style={style.button_row}>
        <TouchableOpacity
          style={style.yellow_button}
          onPress={() => handleButtononPress('c')}>
          <Text style={style.button_text}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.back_button}
          onPress={() => handleButtononPress('back')}>
          <Text style={style.button_text}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.other_button}
          onPress={() => handleButtononPress('*')}>
          <Text style={style.button_text}>*</Text>
        </TouchableOpacity>
      </View>

      <View style={style.button_row}>
        <TouchableOpacity
          style={style.number_button}
          onPress={() => handleButtononPress('7')}>
          <Text style={style.button_text}>7</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.number_button}
          onPress={() => handleButtononPress('8')}>
          <Text style={style.button_text}>8</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.number_button}
          onPress={() => handleButtononPress('9')}>
          <Text style={style.button_text}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.number_button}
          onPress={() => handleButtononPress('/')}>
          <Text style={style.button_text}>/</Text>
        </TouchableOpacity>
      </View>

      <View style={style.button_row}>
        <TouchableOpacity
          style={style.number_button}
          onPress={() => handleButtononPress('4')}>
          <Text style={style.button_text}>4</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.number_button}
          onPress={() => handleButtononPress('5')}>
          <Text style={style.button_text}>5</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.number_button}
          onPress={() => handleButtononPress('6')}>
          <Text style={style.button_text}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.number_button}
          onPress={() => handleButtononPress('+')}>
          <Text style={style.button_text}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={style.button_row}>
        <TouchableOpacity
          style={style.number_button}
          onPress={() => handleButtononPress('1')}>
          <Text style={style.button_text}>1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.number_button}
          onPress={() => handleButtononPress('2')}>
          <Text style={style.button_text}>2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.number_button}
          onPress={() => handleButtononPress('3')}>
          <Text style={style.button_text}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.number_button}
          onPress={() => handleButtononPress('-')}>
          <Text style={style.button_text}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={style.button_row}>
        <TouchableOpacity
          style={style.number_button}
          onPress={() => handleButtononPress('.')}>
          <Text style={style.button_text}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.number_button}
          onPress={() => handleButtononPress('0')}>
          <Text style={style.button_text}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={style.back_button}
          onPress={() => handleButtononPress('=')}>
          <Text style={style.button_text}>=</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 6,
    gap: 20,
  },
  screen: {
    width: '100%',
    height: 200,
    // backgroundColor:'#ffffff',
    color: '#ffffff',
    textAlign: 'right',
    fontSize: 35,
  },
  button_row: {
    flexDirection: 'row',
    gap: 10,
    width: '90%',
  },
  yellow_button: {
    flex: 1,
    height: 80,
    borderRadius: 50,
    backgroundColor: '#ff8d00',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button_text: {
    color: '#ffffff',
    fontSize: 35,
    fontWeight: 'bold',
  },
  back_button: {
    flex: 2,
    height: 80,
    borderRadius: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  other_button: {
    flex: 1,
    height: 80,
    borderRadius: 50,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  number_button: {
    flex: 1,
    height: 80,
    borderRadius: 50,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
