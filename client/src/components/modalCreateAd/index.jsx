import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useModal } from "../../Providers/modalProviders";
import Button from "../button";
import { Input } from "../input";
import Modal from "../modal";
import * as yup from "yup";
import { useState } from "react";

const ModalCreateAd = () => {
  const { openCloseCreateAd, openCloseCreatedSucsess } = useModal();

  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
    year: yup.string().required("Campo Obrigatório").test("test-year", "Ano inválido",
    (value)=>{
      const date = new Date()
      const yearOfNow = date.getFullYear()
      if(value < 1885) return false
      return value <= yearOfNow
    }),
    kilometers: yup.string().required("Campo Obrigatório"),
    price: yup.string().required("Campo Obrigatório"),
    description: yup.string().required("Campo Obrigatório"),
    img: yup.string().required("Campo Obrigatório").url("Url inválida"),
    imgGallery: yup.string().url("Url inválida"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const createAd = (data) => {
    openCloseCreateAd();
    openCloseCreatedSucsess();
  };
  const [adType, setAdType] = useState("Venda");
  const [vehicleType, setVehicleType] = useState("Carro")

  const changeVehicleType = (type)=>setVehicleType(type)
  const changeAdType = (type)=>setAdType(type)

  return (
    <Modal
      closeModal={openCloseCreateAd}
      headerTitle={"Criar Anúncio"}
      HeaderBody={
        <form onSubmit={handleSubmit(createAd)}>
          <span>Tipo de anúncio</span>
          <div style={{ display: "flex", margin: "24px 0", gap: "10px" }}>
            <Button className={adType==="Venda" ? "brand1": "outline2"} isBig fullWidth={true} onClick={(e)=>{
              e.preventDefault()
              changeAdType("Venda")
            }} >
              Venda
            </Button>
            <Button className={adType==="Leilão" ? "brand1": "outline2"} isBig fullWidth={true} onClick={(e)=>{
              e.preventDefault()
              changeAdType("Leilão")
            }}>
              Leilão
            </Button>
          </div>
          <span>Informações do veículo</span>
          <Input
            label={"Título"}
            placeholder="Digitar título"
            name={"title"}
              register={register}
              error={errors?.title}
          />

          <div style={{ display: "flex", gap: "10px" }}>
            <Input
              register={register}
              label={"Ano"}
              placeholder="Digitar Ano"
              error={errors?.year}
              name={"year"}
              type="number"
            />
            <Input
              register={register}
              label={"Quilometrage"}
              placeholder="0"
              error={errors?.kilometers}
              name={"kilometers"}
              type="number"
            />
            <Input
              register={register}
              label={"Preço"}
              placeholder="Digitar Preço"
              error={errors?.price}
              name={"price"}
              type="number"
            />
          </div>
          <Input
            isTextarea
            register={register}
            label={"Descrição"}
            placeholder="Digitar descrição"
            error={errors?.description}
            name={"description"}
          />

          <span style={{display: "block",  margin: "14px 0" }}>Tipo de Veículo</span>
          <div style={{ display: "flex", margin: "24px 0", gap: "10px" }}>
            <Button className={vehicleType==="Carro" ? "brand1": "outline2"}  isBig fullWidth={true} onClick={(e)=>{
              e.preventDefault()
              changeVehicleType("Carro")
            }}>
              Carro
            </Button>
            <Button className={vehicleType==="Moto" ? "brand1": "outline2"} isBig fullWidth={true} onClick={(e)=>{
              e.preventDefault()
              changeVehicleType("Moto")
            }}>
              Moto
            </Button>
          </div>

          <Input
            label={"Imagem da capa"}
            register={register}
            placeholder="Inserir URL da imagem"
            error={errors?.img}
            name={"img"}
          />
          <Input
            label={"1° Imagem da galeria"}
            register={register}
            placeholder="Inserir URL da imagem"
            error={errors?.imgGallery}
            name={"imgGallery"}
          />

          <Button style={{ margin: "20px 0px 0 0" }} className="brandOpacity">
            Adicionar campo para imagem de galeria
          </Button>

          <div style={{ textAlign: "end", margin: "24px 0 0 0" }}>
            <Button
              onClick={openCloseCreateAd}
              isBig
              className="negative"
              style={{ margin: "0 10px 0 0" }}
            >
              Cancelar
            </Button>
            <Button isBig className="brandDisable">
              Criar Anúncio
            </Button>
          </div>
        </form>
      }
    />
  );
};
export default ModalCreateAd;
