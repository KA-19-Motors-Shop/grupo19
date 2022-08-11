import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useModal } from "../../Providers/modalProviders";
import Button from "../button";
import { Input } from "../input";
import Modal from "../modal";
import * as yup from "yup";
import { testBirthdate } from "../../utils";

const ModalEditProfile = () => {
  const { openCloseEditProfile } = useModal();
  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório"),
    email: yup.string().email("Email inválido").required("Campo Obrigatório"),
    cpf: yup.string().length(14, "Cpf inválido").required("Campo Obrigatório"),
    cel: yup.string().min(13, "Número inválido").required("Campo Obrigatório"),
    birthdate: yup.string().length(10, "Data inválida").required("Campo Obrigatório")
      .test("test-birthdate", "Você precisa ser maior de idade", testBirthdate),
    description: yup.string().required("Campo Obrigatório"),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const editProfile = (data) => {
    console.log(data);
  };

  return (
    <>
      <Modal
        headerTitle={"Editar Perfil"}
        closeModal={openCloseEditProfile}
        HeaderBody={
          <form onSubmit={handleSubmit(editProfile)}>
            <span>Informações pessoais</span>
            <Input
              register={register}
              error={errors?.name}
              label={"Nome"}
              placeholder="Ex: Samuel"
              name={"name"}
            />
            <Input
              register={register}
              error={errors?.email}
              label={"Email"}
              placeholder="Ex: samuel@gmail.com"
              name={"email"}
            />
            <Input
              register={register}
              error={errors?.cpf}
              label={"CPF"}
              placeholder="Ex: 000.000.000-00"
              name={"cpf"}
            />
            <Input
              register={register}
              error={errors?.cel}
              label={"Celular"}
              placeholder="Ex: (00)99999-9999"
              name={"cel"}
            />
            <Input
              register={register}
              error={errors?.birthdate}
              type={"date"}
              label={"Data de nascimento"}
              placeholder="Ex: 09/12/1999"
              name={"birthdate"}
            />
            <Input
              register={register}
              error={errors?.description}
              isTextarea
              label={"Descrição"}
              placeholder="Ex: Insira a descrição"
              name={"description"}
            />
            <div
              style={{
                textAlign: "end",
                margin: "24px 0 0 0",
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              <Button onClick={openCloseEditProfile} isBig className="negative">
                Cancelar
              </Button>
              <Button type={"submit"} isBig className="brandDisable">
                Salvar alterações
              </Button>
            </div>
          </form>
        }
      />
    </>
  );
};
export default ModalEditProfile;
