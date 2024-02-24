import { Pressable, Image, Text } from 'react-native';
import { estilos as styles } from './Estilos'; // Asegúrate de importar estilos como 'styles' desde 'Estilos.js'

export const Boton = ({ texto, imagen, accion, color1 = '#bb5', color2 = '#ac9' }) => {
  return (
    <Pressable
      style={({ pressed }) => [{
        backgroundColor: pressed ? color1 : color2,
        margin: pressed ? 6 : 3,
      }, styles.Boton]} // Aquí debes usar 'styles.Boton' para aplicar los estilos al botón
      onPress={accion}
    >
      <Image
        source={imagen}
        style={styles.img} // Aquí debes usar 'styles.img' para aplicar los estilos a la imagen
      />
      <Text style={styles.TextoB}>{texto}</Text>
    </Pressable>
  );
}
