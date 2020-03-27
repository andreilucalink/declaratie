import React, {useState} from 'react';
import './App.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function App() {

  //first
  const [name,setName] = useState();
  const [bday, setBDay] = useState();
  const [bmonth, setBMonth] = useState();
  const [byear, setBYear] = useState();
  const [adress, setAdress] = useState();
  const [location, setLocation] = useState();
  
  // checkboxes
  const[c1,setC1] = useState(false);
  const[c2,setC2] = useState(false);
  const[c3,setC3] = useState(false);
  const[c4,setC4] = useState(false);
  const[c5,setC5] = useState(false);
  const[c6,setC6] = useState(false);
  const[c7,setC7] = useState(false);
  const[c8,setC8] = useState(false);
  const[c9,setC9] = useState(false);
  const[c10,setC10] = useState(false);
  const[prob, setProb] = useState();

  // data & semnatura
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [signature, setSignature] = useState();


  // generate
  const generateDeclaration = () => {
    document.getElementById('formModel').classList.add('hide');
    document.getElementById('completeModel').classList.remove('hide');
    document.getElementById('getPDF').classList.remove('hide');
    document.getElementById('back').classList.remove('hide');
    
  }


  //back button
  const goBack = () => {
    document.getElementById('formModel').classList.remove('hide');
    document.getElementById('completeModel').classList.add('hide');
    document.getElementById('getPDF').classList.add('hide');
    document.getElementById('back').classList.add('hide');
  }


  //getPDF
  const convert2PDF = () => {
      html2canvas(document.getElementById('completeModel')).then(function(canvas) {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 55, 25 ); //-150
      console.warn(pdf)
      pdf.save("declaratie.pdf");  
     
  });
  }

  return (
    <>
    <button id="back" className="btnBack hide" onClick={() => goBack()}>Inapoi</button>
    <button id="getPDF" className="btnPDF hide" onClick={() => convert2PDF()}>Salveaza PDF</button>
    <br/>
    <div className="form" id="formModel">
        <h3>DECLARAŢIE PE PROPRIE RĂSPUNDERE</h3>
        <div id="first">
          <div style={{width:'400px', margin: "0 auto"}}>
          <span><b>Nume, Prenume:</b></span> <input type="text" onChange={(e) => setName(e.target.value)}/> <br/>
          <span><b>Data naşterii:</b></span> 
              <input type="text" className="small mr-5 ml-5" onChange={(e)=> setBDay(e.target.value)}/>
              <input type="text" className="small mr-5" onChange={(e)=> setBMonth(e.target.value)}/>
              <input type="text" className="medium" onChange={(e)=> setBYear(e.target.value)}/> <br/>
          <span><b>Adresa locuinţei:</b></span>
                <textarea rows="2" style={{width: '400px'}} onChange={e => setAdress(e.target.value)}></textarea>
                <div style={{width: '320px', fontSize: '10px', textAlign: 'left'}}>Se va completa adresa locuinței în care persoana locuiește în fapt, indiferent dacă este identică sau nu cu cea menționată în actul de identitate.</div>
                
          <span><b>Locul/locurile deplasării:</b></span>
                <textarea rows="2" style={{width: '400px'}} onChange={e => setLocation(e.target.value)}></textarea>
                <div  style={{width: '320px',fontSize: '10px'}}>Se vor menționa locurile în care persoana se deplasează, în ordinea în care aceasta intenționează să-și desfășoare traseul. </div>
          <span><b>Motivul deplasării:</b></span>
          </div>
        </div>
        <ul>
          <li> <input checked={c1} type="checkbox" value="0" onChange={()=>setC1(!c1)}/>
          1.interes profesional, inclusiv între locuință/gospodărie și locul/locurile de desfășurare a activității profesionale și înapoi 
          </li>
          <li> <input checked={c2} className="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="1" onChange={() => setC2(!c2) }/>2.asigurarea de bunuri care acoperă necesitățile de bază ale persoanelor și animalelor de companie/domestice </li>
          <li> <input checked={c3} type="checkbox" value="2" onChange={()=>setC3(!c3)}/>3.asistență medicală care nu poate fi amânată și nici realizată de la distanță</li>
          <li> <input checked={c4} type="checkbox" onChange={()=>setC4(!c4)}/>4.motive justificate, precum îngrijirea/ însoțirea unui minor/copilului, asistența persoanelor vârstnice, bolnave sau cu dizabilități ori deces al unui membru de familie  </li>
          <li> <input checked={c5} type="checkbox" onChange={()=>setC5(!c5)}/>5.activitate fizică individuală (cu excluderea oricăror activități sportive de echipă/ colective) sau pentru nevoile animalelor de companie/domestice, în apropierea locuinței  </li>
          <li> <input checked={c6} type="checkbox" onChange={()=>setC6(!c6)}/>6.realizarea de activități agricole 
          <textarea type="text"   rows="3" onChange={e=> setProb(e.target.value)}></textarea></li>
          <li> <input checked={c7} type="checkbox" onChange={()=>setC7(!c7)}/>7.donarea de sânge, la centrele de transfuzie sanguină</li>
          <li> <input checked={c8} type="checkbox" onChange={()=>setC8(!c8)}/>8.scopuri umanitare sau de voluntariat; </li>
          <li> <input checked={c9} type="checkbox" onChange={()=>setC9(!c9)}/>9.comercializarea de produse agroalimentare (în cazul producătorilor agricoli) </li>
          <li> <input checked={c10} type="checkbox" onChange={()=>setC10(!c10)}/>10.asigurarea de bunuri necesare desfășurării activității profesionale.
</li>
        </ul>
        <div id="first" style={{fontSize:'10px', width:'400px', margin: 'auto'}}>
        Se va bifa doar motivul/motivele deplasării dintre cele prevăzute în listă, nefiind permise deplasări realizate invocând alte motive decât cele prevăzute în Ordonanța Militară nr. 3/2020. 
        </div>
        <div id="second" style={{width:'400px', marginLeft:'auto', marginRight:'auto', marginTop:'10px'}}>

         
         Data declaraţiei &nbsp; 
         <input type="text" placeholder="ZZ" className="small"onChange={(e) => setDay(e.target.value)}></input>&nbsp; 
         <input type="text" placeholder="LL"className="small"onChange={(e) => setMonth(e.target.value)}></input>&nbsp; 
         <input type="text" placeholder="AAAA" className="medium"onChange={(e) => setYear(e.target.value)}></input>
         <br/>
         
         Semnatura &nbsp; <input type="text"  className="medium"onChange={(e) => setSignature(e.target.value)}></input>
        
        <div><p style={{fontSize: '10px', fontWeight:'900', lineHeight:"1.5", marginTop: "5px"}}>Persoanele care au împlinit vârsta de 65 de ani completează doar pentru motivele prevăzute în câmpurile 1-6, deplasarea fiind permisă zilnic doar în intervalul orar  11.00 – 13.00.  
        Nume</p>
        </div>
        <br/>
        <button className="btn" onClick={generateDeclaration}>GENEREAZĂ</button>
        </div>
    </div>  





    <div id="completeModel" className="hide">
      <img src={require('./img/logo.png')} alt="x" className="logo"></img>
      <h3>DECLARAŢIE PE PROPRIE RĂSPUNDERE</h3>
      <div id="first" style={{lineHeight:'1.5', width: '400px', margin: 'auto', marginTop: '20px'}}>
      <span><b>Nume, Prenume:</b> {name} </span><br/>
      <span><b>Data naşterii:</b> <span>{bday}/{bmonth}/{byear}</span> </span><br/>
      <span><b>Adresa locuinţei:</b> {adress}</span> 
          <div style={{width: '320px', fontSize: '10px', textAlign: 'left', margin: '5px 0 5px 30px'}}>Se va completa adresa locuinței în care persoana locuiește în fapt, indiferent dacă este identică sau nu cu cea menționată în actul de identitate.</div>
      <span><b>Locul/locurile deplasării:</b> {location}</span> 
          <div  style={{width: '320px', fontSize: '10px', margin: '5px 0 5px 30px'}}>Se vor menționa locurile în care persoana se deplasează, în ordinea în care aceasta intenționează să-și desfășoare traseul. </div>
      <span><b>Motivul deplasării:</b></span>
      </div>
    
      <ul id="modelUL" style={{textAlign:'left', width: '400px'}}>
          <li>
          &nbsp;&nbsp;&nbsp;
            {
              c1 ? (<img alt="x" src={require('./img/tick.png')} className="checked"/>) :  (<img alt="x" src={require('./img/cancel.png')} className="checked"/>)
            }&nbsp;
           1.interes profesional, inclusiv între locuință/gospodărie și locul/locurile de desfășurare a activității profesionale și înapoi
          </li>
          <li>
            &nbsp;&nbsp;&nbsp;
            {
              c2 ? (<img alt="x" src={require('./img/tick.png')} className="checked"/>) :  (<img alt="x" src={require('./img/cancel.png')} className="checked"/>)
            }&nbsp;
          2.asigurarea de bunuri care acoperă necesitățile de bază ale persoanelor și animalelor de companie/domestice
          </li>

          <li>
            &nbsp;&nbsp;&nbsp;
            {
              c3 ? (<img alt="x" src={require('./img/tick.png')} className="checked"/>) :  (<img alt="x" src={require('./img/cancel.png')} className="checked"/>)
            }&nbsp;
            3.asistență medicală care nu poate fi amânată și nici realizată de la distanță</li>
          <li>
            &nbsp;&nbsp;&nbsp;
            {
              c4 ? (<img alt="x" src={require('./img/tick.png')} className="checked"/>) :  (<img alt="x" src={require('./img/cancel.png')} className="checked"/>)
            }&nbsp;
            4.motive justificate, precum îngrijirea/ însoțirea unui minor/copilului, asistența persoanelor vârstnice, bolnave sau cu dizabilități ori deces al unui membru de familie 
          </li>

          <li>
            &nbsp;&nbsp;&nbsp;
            {
              c5 ? (<img alt="x" src={require('./img/tick.png')} className="checked"/>) :  (<img alt="x" src={require('./img/cancel.png')} className="checked"/>)
            }&nbsp;
            5.activitate fizică individuală (cu excluderea oricăror activități sportive de echipă/ colective) sau pentru nevoile animalelor de companie/domestice, în apropierea locuinței
          </li>

          <li>
            &nbsp;&nbsp;&nbsp;
            {
              c6 ? (<img alt="x" src={require('./img/tick.png')} className="checked"/>) :  (<img alt="x" src={require('./img/cancel.png')} className="checked"/>)
            }&nbsp;
            6.realizarea de activități agricole: {prob ? (<strong className="customProblem">{prob}</strong>) : null}  
          </li>
          <li>
            &nbsp;&nbsp;&nbsp;
            {
              c7 ? (<img alt="x" src={require('./img/tick.png')} className="checked"/>) :  (<img alt="x" src={require('./img/cancel.png')} className="checked"/>)
            }&nbsp;
            7.donarea de sânge, la centrele de transfuzie sanguină  
          </li>
          <li>
            &nbsp;&nbsp;&nbsp;
            {
              c8 ? (<img alt="x" src={require('./img/tick.png')} className="checked"/>) :  (<img alt="x" src={require('./img/cancel.png')} className="checked"/>)
            }&nbsp;
           8.scopuri umanitare sau de voluntariat; 
          </li>
          <li>
            &nbsp;&nbsp;&nbsp;
            {
              c9 ? (<img alt="x" src={require('./img/tick.png')} className="checked"/>) :  (<img alt="x" src={require('./img/cancel.png')} className="checked"/>)
            }&nbsp;
           9.comercializarea de produse agroalimentare (în cazul producătorilor agricoli)
          </li>
          <li>
            &nbsp;&nbsp;&nbsp;
            {
              c10 ? (<img alt="x" src={require('./img/tick.png')} className="checked"/>) :  (<img alt="x" src={require('./img/cancel.png')} className="checked"/>)
            }&nbsp;
           10.asigurarea de bunuri necesare desfășurării activității profesionale.
 
          </li>
        </ul>
        <div id="first" style={{fontSize:'10px', width:'400px', margin: 'auto', marginLeft: '10px', marginTop:'10px'}}>
        Se va bifa doar motivul/motivele deplasării dintre cele prevăzute în listă, nefiind permise deplasări realizate invocând alte motive decât cele prevăzute în Ordonanța Militară nr. 3/2020. 
        </div>
        <div className="flexBottom"> <span>Data declarației: {day}/{month}/{year}</span> <span>Semnătura: {signature}</span>
        </div>
        <div style={{fontSize: '10px', fontWeight:'900', lineHeight:"1.5", marginTop: "10px"}}>Persoanele care au împlinit vârsta de 65 de ani completează doar pentru motivele prevăzute în câmpurile 1-6, deplasarea fiind permisă zilnic doar în intervalul orar  11.00 – 13.00.  
        Nume
        </div>
        
    </div>
    </>
  );
}

export default App;
