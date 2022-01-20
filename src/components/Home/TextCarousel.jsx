import React, { Component } from 'react';
import { CarouselItem, UncontrolledCarousel } from 'reactstrap';
import styles from './css/TextCarousel.module.css';

const items = [

  {text: "Un lugar para facilitarte la comunicación entre todos los vecinos de tu edificio o comunidad."},

  {text: "Ya seas el presidente de tu comunidad, el vecino independiente que nunca se entera de las reuniones o la señora de los gatos del 3ºA, en 'iHood' hay un lugar para ti!"},

  {text: "Aquí podrás crear tu propia comunidad, personalizandola tanto como quieras, añadir vecinos, gestionar sus incidencias y pagos, incluso ¡enviar notificaciones!"},
  
  {text: "Tendrás un perfil personal desde donde podrás gestionar tu información de usuario además de todas las herramientas que te ofrece 'iHood'"},
  
  {text: "Buzón de notificaciones, Formulario de incidencias, ¡hasta un calendario de eventos!"},

  {text: "Una vez que el presidente haya dado de alta su comunidad, tendrá la opción de enviarle un link de invitación a cada uno de sus vecinos. Una vez registrados, tendrán acceso a todas las herramientas para formar parte de la comunidad iHood!!"}

];


class TextCarousel extends Component {
    render() {
      const slides = items.map((item) => {
              return (
                <CarouselItem
                  className={styles.textFormat}
                  key={item.text}
                />
              );
            });

        return(
        <UncontrolledCarousel autoPlay={true} items={items} className={styles.carouselContainer}> {slides}
        </UncontrolledCarousel>
    );
}
}

export default TextCarousel;