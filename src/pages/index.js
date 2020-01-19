import React from 'react';
import Navbar from '../components/navbar/navbar';
import Map from '../components/contact/map';

export default ({ data }) => {
  return (
    <div>
      <Navbar />
      <div>
        <article style={{ lineHeight: 'normal' }}>
          Szeretettel várja rendelőjükbe a kedves Gazdikat és kiskedvenceiket
          Dr. Szabó Orsolya és Dr. Fagyas Zsolt. Pácienseik között fellelhetők
          kutyák, macskák, nyulak és kisrágcsálók is.
        </article>
        <article style={{ lineHeight: 'normal' }}>
          Szolgáltatásaink: Belgyógyászat Fogászati kezelések Lágy- és
          csontsebészet Ortopédiai szakrendelés Bőrgyógyászat Szülészet
          Ivartalanítás Védőoltások beadása Külső és belső paraziták elleni
          kezelés és védekezés Laborvizsgálat Mikrochip beültetés Állatútlevél
          kiállítás Digitális röntgen Ultrahang
        </article>
      </div>
      <Map />
    </div>
  );
};
