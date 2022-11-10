import  React,  { Component } from 'react';
import { View, Text, StyleSheet,TextInput,SafeAreaView } from 'react-native';



const nombre = () => {
  return <Text>JORDI NAVARRO ESCRIVÀ</Text>
  };
const datos = () => {
  
  const [text, onChangeText] = React.useState("Introduce tus datos");
  return (
    
    <SafeAreaView>
      <TextInput
        style={estilo}
        onChangeText={onChangeText}
        value={text}
        
        
          placeholderTextColor='#FFFFFF'
        
       
        
       
        
      />
     
    </SafeAreaView>
      
      
   

  );
};
const estilo = () =>{

  styles.florida;
  

}


class App extends Component {
render() {
return (
<>
      {nombre()}
      {datos()}
      {estilo()}
</>
);
}
}
const modulos2Dam = [
{ nombre : 'DIN', profesor: 'Manel', horas: 120},
{ nombre : 'ADA', profesor: 'Juanmi', horas: 120},
{ nombre: 'PMDM', profesor: 'Fran', horas: 100 },
{ nombre: 'PSP', profesor: 'Fran', horas: 60 },
{ nombre: 'SG E', profesor: 'Belén', horas: 100 },
{ nombre: 'Inglés', profesor: 'Caterina', horas: 40},
{ nombre: 'EIE', profesor: 'Manuel', horas: 60 },
];
const styles = StyleSheet.create({
sectionContainer: {
marginTop: 32,
paddingHorizontal: 24,
},

upv : {
  backgroundColor: 'purple',
fontSize: 10,
fontWeight: '600',
padding: 4,
paddingLeft: 12,
textAlign: 'left',
color: 'grey',
},

florida: {
  backgroundColor: 'red',
fontSize: 12,
fontWeight: '600',
padding: 4,
paddingRight: 12,
textAlign: 'right',
}

});  
export default App;
