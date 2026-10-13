
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import {useState} from "react";

function App() {

    const [czyGenerowac, setCzyGenerowac] = useState(false)

    const [adresWWW, setAdresWWW] = useState("")
    const [login, setLogin] = useState("")
    const [haslo, setHaslo] = useState("")
    const [finalData, setFinalData] = useState(null);


    function submitForm(e){
        e.preventDefault()


        setFinalData({
            adresWWW: adresWWW,
            login: login,
            haslo: czyGenerowac ? "automatycznie generowane" : haslo
        });
    }

  return (
    <>
        <div className="m-5">
                <h1>Menedżer haseł - wykonał 009382718712 </h1>
                <form onSubmit={submitForm}>
                    <label htmlFor="adresWWW">Adres WWW</label>
                    <input className="w-100" type="text" id= "adresWWW"  onChange={(e) => setAdresWWW(e.target.value)} />
                    <br />
                    <br/>
                    <label htmlFor="loginId">Login</label>
                    <input className="w-100" type="text" id= "loginId" onChange={(e) => setLogin(e.target.value)} />

                    <br />
                    <br/>
                    <input type="checkbox" onClick={() => setCzyGenerowac(!czyGenerowac)} /> <label >Wygeneruj hasło</label>

                    <br />
                    <label htmlFor="hasloId">Hasło</label>
                    <input className="w-100" type="password" id ="hasloId" disabled={czyGenerowac} onChange={(e) => setHaslo(e.target.value)} />
                    <br/>

                    <br />
                    <button type="submit" className="btn btn-primary m-2">Zapisz</button>

                </form>
        </div>

        <div className="m-5">
            <p className={"text-primary p-2"}>Adres:  {finalData && finalData.adresWWW}</p>
            <p className={"p-2"}>Login: {finalData && finalData.login}</p>
            <p className={"p-2"}>Hasło: {finalData && finalData.haslo}</p>
        </div>

    </>

  )
}

export default App
