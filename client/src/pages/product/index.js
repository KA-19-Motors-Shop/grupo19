import Header from "../../components/header";
import { SecundaryHeader } from "./style";
import ContainerCards from "../../components/ContainerCards"; 


import car1 from "../../assets/car1.png";
import car2 from "../../assets/car2.png";
import car3 from "../../assets/car3.png";
import car5 from "../../assets/car5.png";
import car6 from "../../assets/car6.png";
import car7 from "../../assets/car7.png";
import car8 from "../../assets/car8.png";
import car9 from "../../assets/car9.png";
import car10 from "../../assets/car10.png";
import car11 from "../../assets/car11.png";
import car12 from "../../assets/car12.png";
import Button from "../../components/button";
import ContainerAuction from "../../components/containerAuction";


const PageProducts = () => {

  const arrayCars = [
    {
      img: car1,
      title: "Product title stays here",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      user: "Samuel Leão",
      KM: "0 KM",
      year: "2019",
      value: "R$ 00.000,00",
    },
    {
      img: car2,
      title: "Product title stays here bla bla bla bla",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      user: "Samuel Leão",
      KM: "0 KM",
      year: "2019",
      value: "R$ 00.000,00",
    },
    {
      img: car3,
      title: "Product title stays here",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      user: "Samuel Leão",
      KM: "0 KM",
      year: "2019",
      value: "R$ 00.000,00",
    },
    {
      img: car5,
      title: "Product title stays here",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      user: "Samuel Leão",
      KM: "0 KM",
      year: "2019",
      value: "R$ 00.000,00",
    },
    {
      img: car6,
      title: "Product title stays here",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      user: "Samuel Leão",
      KM: "0 KM",
      year: "2019",
      value: "R$ 00.000,00",
    },
    {
      img: car7,
      title: "Product title stays here",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      user: "Samuel Leão",
      KM: "0 KM",
      year: "2019",
      value: "R$ 00.000,00",
    },
    {
      img: car8,
      title: "Product title stays here",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      user: "Samuel Leão",
      KM: "0 KM",
      year: "2019",
      value: "R$ 00.000,00",
    },
    {
      img: car9,
      title: "Product title stays here",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      user: "Samuel Leão",
      KM: "0 KM",
      year: "2019",
      value: "R$ 00.000,00",
    },
    {
      img: car10,
      title: "Product title stays here",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      user: "Samuel Leão",
      KM: "0 KM",
      year: "2019",
      value: "R$ 00.000,00",
    },
    {
      img: car11,
      title: "Product title stays here",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      user: "Samuel Leão",
      KM: "0 KM",
      year: "2019",
      value: "R$ 00.000,00",
    },
    {
      img: car12,
      title: "Product title stays here",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      user: "Samuel Leão",
      KM: "0 KM",
      year: "2019",
      value: "R$ 00.000,00",
    },
  ];

  const arrayAuction = [
    {
      timer: "01:58:00",
      img: car7,
      title: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      user: "Rodrigo Tavares",
      KM: "0 KM",
      year: "2013",
      value: "R$ 78.500,00",
    },
    {
      timer: "01:58:00",
      img: car5,
      title: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      user: "Rodrigo Tavares",
      KM: "0 KM",
      year: "2013",
      value: "R$ 78.500,00",
    },
    {
      timer: "01:58:00",
      img: car3,
      title: "Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes",
      details:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
      user: "Tiago",
      KM: "0 KM",
      year: "2013",
      value: "R$ 78.500,00",
    },
  ]

  return (
    <>
      <Header />
      <SecundaryHeader>
        <h1>Velocidade e experiência em um lugar feito para você</h1>
        <p>Um ambiente feito para voce explorar o seu melhor</p>

        <div className="buttons">
          <Button isBig={true} className="outlineLight">Leilão</Button>
          <Button isBig={true} className="outlineLight">Carros</Button>
          <Button isBig={true} className="outlineLight">Motos</Button>
        </div>


      </SecundaryHeader>
      <ContainerAuction arrayTorender={arrayAuction}/>
      <ContainerCards arrayToRender={arrayCars} typeCard='Carros' />
      <ContainerCards arrayToRender={arrayCars} typeCard='Motos' />
    </>
  );
};
export default PageProducts;
