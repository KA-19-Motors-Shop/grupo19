import { useModal } from "../../Providers/modalProviders";
import Button from "../button";
import { Input } from "../input";
import Modal from "../modal";
import * as yup from "yup";
import { useForm, formState, handleSubmit } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

const ModalEditAd = () => {
  const { openCloseEditAd, openCloseModalExcludeAd } = useModal();

  const schema = yup.object().shape({
    title: yup.string(),
    year: yup
      .string()
      .test("test-year", "Ano inválido", (value) => {
        const date = new Date();
        const yearOfNow = date.getFullYear();
        if (value < 1885) return false;
        return value <= yearOfNow;
      }),
    kilometers: yup.string(),
    price: yup.string(),
    description: yup.string(),
    img: yup.string().url("Url inválida"),
    imgGallery: yup.string().url("Url inválida"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [adType, setAdType] = useState("Venda");
  const [vehicleType, setVehicleType] = useState("Carro");
  const [isPublished, setIsPublished] = useState(true);
  
  const changeVehicleType = (type) => setVehicleType(type);
  const changeAdType = (type) => setAdType(type);

  

  const editAd = (data) => {
    openCloseEditAd();
    console.log({...data, isPublished, vehicleType, adType});
  };



  return (
    <Modal
      closeModal={openCloseEditAd}
      headerTitle={"Editar Anúncio"}
      HeaderBody={
        <form onSubmit={handleSubmit(editAd)}>
          <span>Tipo de anúncio</span>
          <div style={{ display: "flex", margin: "24px 0", gap: "10px" }}>
            <Button
              className={adType === "Venda" ? "brand1" : "outline2"}
              isBig
              fullWidth={true}
              onClick={(e) => {
                e.preventDefault();
                changeAdType("Venda");
              }}
            >
              Venda
            </Button>
            <Button
              className={adType === "Leilão" ? "brand1" : "outline2"}
              isBig
              fullWidth={true}
              onClick={(e) => {
                e.preventDefault();
                changeAdType("Leilão");
              }}
            >
              Leilão
            </Button>
          </div>
          <span>Informações do veículo</span>
          <Input
            register={register}
            label={"Título"}
            placeholder="Digitar título"
            name={"title"}
            error={errors?.title}
          />

          <div style={{ display: "flex", gap: "10px" }}>
            <Input
              register={register}
              label={"Ano"}
              placeholder="Digitar Ano"
              name={"year"}
              error={errors?.year}
            />
            <Input
              register={register}
              label={"Quilometrage"}
              placeholder="0"
              error={errors?.kilometers}
            name={"kilometers"}
            />
            <Input
              register={register}
              label={"Preço"}
              placeholder="Digitar Preço"
              name={"price"}
              error={errors?.price}
            />
          </div>
          <Input
            isTextarea
            register={register}
            label={"Descrição"}
            placeholder="Digitar descrição"
            name={"description"}
            error={errors?.description}
          />

          <span>Tipo de Veículo</span>
          <div style={{ display: "flex", margin: "24px 0", gap: "10px" }}>
            <Button
              className={vehicleType === "Carro" ? "brand1" : "outline2"}
              isBig
              fullWidth={true}
              onClick={(e) => {
                e.preventDefault();
                changeVehicleType("Carro");
              }}
            >
              Carro
            </Button>
            <Button
              className={vehicleType === "Moto" ? "brand1" : "outline2"}
              isBig
              fullWidth={true}
              onClick={(e) => {
                e.preventDefault();
                changeVehicleType("Moto");
              }}
            >
              Moto
            </Button>
          </div>

          <span>Publicado</span>
          <div style={{ display: "flex", margin: "24px 0", gap: "10px" }}>
            <Button className={isPublished ? "brand1":"outline2" } isBig fullWidth={true} onClick={(e)=>{
              e.preventDefault()
              setIsPublished(true)
            }} >
              Sim
            </Button>
            <Button className={!isPublished ? "brand1":"outline2" } isBig fullWidth={true} onClick={(e)=>{
              e.preventDefault()
              setIsPublished(false)
            }} >
              Não
            </Button>
          </div>

          <Input
            label={"Imagem da capa"}
            placeholder="Inserir URL da imagem"
            name={"img"}
            register={register}
            error={errors?.img}
          />
          <Input
            label={"1° Imagem da galeria"}
            placeholder="Inserir URL da imagem"
            name={"img"}
            register={register}
            error={errors?.img}
          />
          <Input
            label={"2° Imagem da galeria"}
            placeholder="Inserir URL da imagem"
            name={"img"}
            register={register}
            error={errors?.img}
          />

          <Button 
            style={{ 
              margin: "20px 0px 0 0",
              width:'100%',
              maxWidth:"320px",
            }} 
            className="brandOpacity text-overflow">
            Adicionar campo para imagem de galeria
          </Button>

          <div
            style={{
              textAlign: "end",
              margin: "24px 0 0 0",
              display: "flex",
              gap: "10px",
              flexWrap:"wrap"
            }}
          >
            <Button
              onClick={() => {
                openCloseEditAd();
                openCloseModalExcludeAd();
              }}
              isBig
              className="negative text-overflow"
              style={{ 
                flex: "1",
                minWidth:'178px'
              }}
            >
              Excluir Anúncio
            </Button>
            <Button isBig className="brandDisable text-overflow flex1">
              Salvar Alterações
            </Button>
          </div>
        </form>
      }
    />
  );
};
export default ModalEditAd;
