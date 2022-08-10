import { AdContainer } from "./style";
import car2 from "../../assets/car2.png";
import Button from "../../components/button";
import UserAdvertiser from "../../components/userAdvertiser";
import { Input } from "../../components/input";
import { useNavigate } from "react-router-dom";
import { useModal } from "../../Providers/modalProviders";
import ModalImage from "../../components/modalImage";
import { useState } from "react";

const AdSinglePage = () => {
  const { openModalImage, openCloseModalImage } = useModal();
  const [imageSelected, setImageSelected] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      {openModalImage && <ModalImage image={imageSelected} />}

      <AdContainer>
        <div className="blue-bg"></div>
        <div className="container">
          <div className="left-col">
            <section className="showcase-img box">
              <figure>
                <figcaption>Imagem de capa do veículo</figcaption>
                <img src={car2} alt="Imagem do veículo" />
              </figure>
            </section>

            <section className="showcase-vehicle-info box">
              <h6>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200</h6>
              <div className="info ">
                <div className="btn">
                  <Button
                    style={{ margin: "0 12px 0 0" }}
                    className="brandOpacity"
                  >
                    2013
                  </Button>
                  <Button className="brandOpacity">0 KM</Button>
                </div>
                <span>R$ 4000.000,00</span>
              </div>
              <Button className="brand1">Comprar</Button>
            </section>

            <section className="description box">
              <h6>Descrição</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                iure ea eius laborum delectus cupiditate corporis quo eaque
                voluptas nam aut illo officia magnam, quod excepturi fugit nobis
                quis necessitatibus?
              </p>
            </section>

            <section className="comments box">
              <h6>Comentários</h6>
              <ul>
                <li>
                  <UserAdvertiser color={"blue"} userName={"Gabriel"} />
                  <span className="time-passed"> • &nbsp; há 3 dias</span>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Rem minima distinctio esse in, fuga mollitia molestias
                    reprehenderit magnam vel alias velit labore, aperiam illo
                    ipsam ex molestiae praesentium, similique non?
                  </p>
                </li>

                <li>
                  <UserAdvertiser color={"blue"} userName={"Gabriel"} />
                  <span className="time-passed"> • &nbsp; há 3 dias</span>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Rem minima distinctio esse in, fuga mollitia molestias
                    reprehenderit magnam vel alias velit labore, aperiam illo
                    ipsam ex molestiae praesentium, similique non?
                  </p>
                </li>

                <li>
                  <UserAdvertiser color={"blue"} userName={"Gabriel"} />
                  <span className="time-passed"> • &nbsp; há 3 dias</span>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Rem minima distinctio esse in, fuga mollitia molestias
                    reprehenderit magnam vel alias velit labore, aperiam illo
                    ipsam ex molestiae praesentium, similique non?
                  </p>
                </li>

                <li>
                  <UserAdvertiser color={"blue"} userName={"Gabriel"} />
                  <span className="time-passed"> • &nbsp; há 3 dias</span>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Rem minima distinctio esse in, fuga mollitia molestias
                    reprehenderit magnam vel alias velit labore, aperiam illo
                    ipsam ex molestiae praesentium, similique non?
                  </p>
                </li>
              </ul>
            </section>

            {localStorage.getItem("@Token") && (
              <section className="comments-input box">
                <form action="">
                  <UserAdvertiser color={"blue"} userName="Jerson Ribeiro" />
                  <Input
                    isTextarea
                    name={"comment"}
                    placeholder={"Faça seu comentário"}
                    id="commentTextArea"
                    onChange={(e) => {
                      e.target.value
                        ? setButtonDisabled(false)
                        : setButtonDisabled(true);
                    }}
                  />
                  <Button
                    className={buttonDisabled ? "brandDisable" : "brand1"}
                    style={{
                      position: "absolute",
                      right: "8px",
                      bottom: "12px",
                    }}
                    disabled={buttonDisabled}
                  >
                    Comentar
                  </Button>
                </form>
                <div className="btn-comments-recommendation">
                  <button
                    onClick={() => {
                      document.getElementById("commentTextArea").value =
                        "Gostei Muito!";
                      setButtonDisabled(false);
                    }}
                  >
                    Gostei muito!
                  </button>
                  <button
                    onClick={() => {
                      document.getElementById("commentTextArea").value =
                        "Incrível!";
                      setButtonDisabled(false);
                    }}
                  >
                    Incrível!
                  </button>
                  <button
                    onClick={() => {
                      document.getElementById("commentTextArea").value =
                        "Recomendarei para meus amigos!";
                      setButtonDisabled(false);
                    }}
                  >
                    Recomendarei para meus amigos!
                  </button>
                </div>
              </section>
            )}
          </div>

          <div className="col-right">
            <section className="gallery box">
              <h6>Fotos</h6>
              <ul>
                <li>
                  <figure
                    onClick={() => {
                      openCloseModalImage();
                      setImageSelected(car2);
                    }}
                  >
                    <img src={car2} alt="Imagem da galeria" />
                  </figure>
                </li>
                <li>
                  <figure
                    onClick={() => {
                      openCloseModalImage();
                      setImageSelected(car2);
                    }}
                  >
                    <img src={car2} alt="Imagem da galeria" />
                  </figure>
                </li>
                <li>
                  <figure
                    onClick={() => {
                      openCloseModalImage();
                      setImageSelected(car2);
                    }}
                  >
                    <img src={car2} alt="Imagem da galeria" />
                  </figure>
                </li>
                <li>
                  <figure
                    onClick={() => {
                      openCloseModalImage();
                      setImageSelected(car2);
                    }}
                  >
                    <img src={car2} alt="Imagem da galeria" />
                  </figure>
                </li>
                <li>
                  <figure
                    onClick={() => {
                      openCloseModalImage();
                      setImageSelected(car2);
                    }}
                  >
                    <img src={car2} alt="Imagem da galeria" />
                  </figure>
                </li>
                <li>
                  <figure
                    onClick={() => {
                      openCloseModalImage();
                      setImageSelected(car2);
                    }}
                  >
                    <img src={car2} alt="Imagem da galeria" />
                  </figure>
                </li>
              </ul>
            </section>

            <section className="owner box">
              <div className="ownerNameInitials">G</div>
              <h6>Gabriel</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
              <Button
                isBig
                onClick={() => {
                  window.scrollTo(0, 0);
                  navigate("/profile-products/Samuel");
                }}
              >
                Ver todos anúncios
              </Button>
            </section>
          </div>
        </div>
      </AdContainer>
    </>
  );
};

export default AdSinglePage;
