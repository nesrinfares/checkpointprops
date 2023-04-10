import React from 'react'
import Figure from 'react-bootstrap/Figure';
function FullName({ name, age, handlealert }) {
  return (
    <div>
         <div className="NEW-00">

           
               <Figure>
                    <Figure.Image
                        width={271}
                        height={200}
                        alt=""
                        src="https://avatars.githubusercontent.com/u/95926448?v=4"
                        />
                <Figure.Caption>
                    <h2>Développeuse-FullStack-js </h2>
                    <p>bonjour , je m'appelle nesrine j'ai 24 ans je suis  etudiant deuxieme master profossionnel commerce electronique et devellopeuse full stack js .</p>

                </Figure.Caption>
                </Figure>
        </div>


    </div>
  )
}

export default FullName
