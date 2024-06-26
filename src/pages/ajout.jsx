import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { useRouter } from "next/router"
import axios from "axios"

const stringRequired = Yup.string().required("Ce champ est requis")

const validationSchema = Yup.object({
  type: stringRequired,
  nom: stringRequired,
  adresse: stringRequired,
  ville: stringRequired,
  codePostal: stringRequired,
  pays: stringRequired,
})

const AddAdressesPage = () => {
  const router = useRouter()
  const handleSubmit = async (values, { resetForm }) => {
    await axios.post("/api/adresses", values)
    router.push("/")
  }

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full p-4 md:p-8 mt-n3">
        <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">
          Ajouter une adresse
        </h1>
        <Formik
          noValidate
          initialValues={{}}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4">
            <Fields />
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Ajouter
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  )
}

const Fields = () => (
  <>
    <div className="mb-4">
      <label
        htmlFor="type"
        className="block font-bold mb-2 text-lg text-gray-800"
      >
        Type de lieu :
      </label>
      <Field
        as="select"
        id="type"
        name="type"
        className="w-full p-2 pl-10 text-sm text-gray-800 border border-gray-300 rounded"
      >
        <option value="">Sélectionner le type de lieu</option>
        <option value="Restaurant">Restaurant</option>
        <option value="Musée">Musée</option>
        <option value="Bar">Bar</option>
        <option value="Parc">Parc</option>
      </Field>
      <ErrorMessage
        name="type"
        component="div"
        className="text-red-500 text-sm"
      />
    </div>

    <div className="mb-4">
      <label
        htmlFor="nom"
        className="block font-bold mb-2 text-lg text-gray-800"
      >
        Nom du lieu :
      </label>
      <Field
        type="text"
        id="nom"
        name="nom"
        className="w-full p-2 pl-10 text-sm text-gray-800 border border-gray-300 rounded"
      />
      <ErrorMessage
        name="nom"
        component="div"
        className="text-red-500 text-sm"
      />
    </div>

    <div className="mb-4">
      <label
        htmlFor="adresse"
        className="block font-bold mb-2 text-lg text-gray-800"
      >
        Adresse :
      </label>
      <Field
        type="text"
        id="adresse"
        name="adresse"
        className="w-full p-2 pl-10 text-sm text-gray-800 border border-gray-300 rounded"
      />
      <ErrorMessage
        name="adresse"
        component="div"
        className="text-red-500 text-sm"
      />
    </div>

    <div className="mb-4">
      <label
        htmlFor="ville"
        className="block font-bold mb-2 text-lg text-gray-800"
      >
        Ville :
      </label>
      <Field
        type="text"
        id="ville"
        name="ville"
        className="w-full p-2 pl-10 text-sm text-gray-800 border border-gray-300 rounded"
      />
      <ErrorMessage
        name="ville"
        component="div"
        className="text-red-500 text-sm"
      />
    </div>

    <div className="mb-4">
      <label
        htmlFor="codePostal"
        className="block font-bold mb-2 text-lg text-gray-800"
      >
        Code postal :
      </label>
      <Field
        type="text"
        id="codePostal"
        name="codePostal"
        className="w-full p-2 pl-10 text-sm text-gray-800 border border-gray-300 rounded"
      />
      <ErrorMessage
        name="codePostal"
        component="div"
        className="text-red-500 text-sm"
      />
    </div>

    <div className="mb-4">
      <label
        htmlFor="pays"
        className="block font-bold mb-2 text-lg text-gray-800"
      >
        Pays :
      </label>
      <Field
        type="text"
        id="pays"
        name="pays"
        className="w-full p-2 pl-10 text-sm text-gray-800 border border-gray-300 rounded"
      />
      <ErrorMessage
        name="pays"
        component="div"
        className="text-red-500 text-sm"
      />
    </div>
  </>
)

export default AddAdressesPage
