import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Profession() {
    const students =
    {
      name: "fatma ben aissa",
      email: "fatmabenaissa@gmail.com",
      address: "gabes"
  
    }
    const person = {
      name: "gomycode",
      email: "gomycode@gmail.com",
      address: "tunis"
    }
    const gens = [
      { nom: "lobna", age: 24, email: "lonakarmous@gmail.com", img: "https://pps.whatsapp.net/v/t61.24694-24/291841151_586352083116501_156759924432813204_n.jpg?ccb=11-4&oh=01_AdQR5WxH4uE2JMEITpA2YMK_vV0RwCuCwiI7PD00c8sCSQ&oe=6440ED74" },
      { nom: "mabrouka", age: 24, email: "mabroukakhadher@gmail.com", img: "https://pps.whatsapp.net/v/t61.24694-24/312285525_613084790647473_8096809732674354271_n.jpg?ccb=11-4&oh=01_AdTqmkXpTahpXkIdfuUymvtLaPGrLm4pxjM9rNZfaZTqiA&oe=6440F75C" },
      { nom: "oumaima", age: 24, email: "oumaimahaz@isimg.tn", img: "https://pps.whatsapp.net/v/t61.24694-24/152143169_364687929057219_4910112350579666079_n.jpg?ccb=11-4&oh=01_AdTEZUwE3Wn9LdntU0dIu0eyF3Zn-BgpWMcagH-vuCRv6g&oe=6440F9C9" },
      { nom: "amel", age: 24, email: "amelhajali@gmail.com", img: "https://pps.whatsapp.net/v/t61.24694-24/324803036_712130033977457_5491499094824614234_n.jpg?ccb=11-4&oh=01_AdTOoxO8oikzDSpqEHMkINI5NLNvy-kFVBSok2sL0mC1ZA&oe=6441135F" },
      { nom: "ahlem", age: 27, email: "ahlemmbareka@gmail.com", img: "https://pps.whatsapp.net/v/t61.24694-24/338833863_599683278708891_4711357234198734229_n.jpg?ccb=11-4&oh=01_AdRAq3uk_6HnxoEaMNRa6h4kzmRe3oD0Od4EM_uZ0wk8Rg&oe=64411935" },
  
    ]
  return (
    <div>
       <div className="Best">
       
      </div>
      <div className="Global" style={{ display: "flex" }}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://media.licdn.com/dms/image/D4E03AQH6Xvx6O0iPnA/profile-displayphoto-shrink_200_200/0/1679827575745?e=1686787200&v=beta&t=cs4UMzwAmVzIVoW6-rbO6XejT714zWJ0TrT_LboWYqU" />
          <Card.Body style={{ backgroundColor: "aqua"  }}>
            <Card.Title><u>{students.name}</u></Card.Title>
            <Card.Text>{students.email}</Card.Text>
            <Card.Text>{students.address}</Card.Text>
            <Card.Text>
              <p>Instructor full stack js.</p>
            </Card.Text>
            <Button variant="primary">Search</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://media.licdn.com/dms/image/C4D0BAQGQiRGb69VRqA/company-logo_200_200/0/1601910148303?e=1689206400&v=beta&t=7wLkz37OXMU9n3GV24OA-MNLKR44nrD6vx8NFfR75ec" />
          <Card.Body style={{ backgroundColor: "aqua" }}>
            <Card.Title><u>{person.name}</u></Card.Title>
            <Card.Text>{person.email}</Card.Text>
            <Card.Text>{person.address}</Card.Text>
            <Card.Text>
              <p>
                centre de formation etc.</p>
            </Card.Text>
            <Button variant="primary">Serarch</Button>
          </Card.Body>
        </Card>
      </div>
      {gens.map((el) => (
    <div className="gens">
          <img style= {{
            minWidth: "150px", minHeight: "150px", maxWidth: "150px",
            maxHeight: "150px"}} 
          src={el.img} alt="description of image" />
          <h5 className="title">{el.nom}</h5>
          <h6 className="Email">{el.age}</h6>
          <h6 className="Email">{el.email}</h6>

     </div>
      ))}
    </div>
  )
}

export default Profession
