import './App.css'
// import { PropsOverView } from './Components/PropsOverView'
import { Form } from './Components/Form';
// import { PropsValidations } from './Components/PropsValidation'
 


function App() {
  const field = [
    {
      name:'user Name',
      label:'user name',
      type:'text',
      isRequire:true,
      placeholder:'enter your name',
    },
    {
      name:'user Email',
      label:'user email',
      type:'email',
      isRequire:true,
      placeholder:'enter your email',
    },
    {
      name:'userPhone',
      label:'Phone',
      type:'tel',
      isRequire:true,
      placeholder:'enter your Phone',
    },
    {
      name:'userPass',
      label:'password',
      type:'password',
      isRequire:true,
      placeholder:'enter your password',
    },
    {
      name:'userConfirmPass',
      label:'userConfirmPass',
      type:'password',
      isRequire:true,
      placeholder:'enter your confirm password',
    },
  ];

  return (
    <>
      {/* <PropsOverView
      components={1}
      name="Varun Dange"
      email="varundange7@gmail.com"
      phone={9307452739}
      />

      <PropsOverView
      components={1}
      name="Varun Dange"
      email="dangevarun7@gmail.com"
     /> */}
     {/* <PropsValidations label="varun" length={1}/> */}
     <Form formData={field} />
     </>
    
  );
}

export  { App }
