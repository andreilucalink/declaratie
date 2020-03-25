import React, {useState} from 'react';
import './App.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function App() {

  //first
  const [subs,setSubs] = useState();
  const [gen, setGen] = useState('fiul');
  const [parent1, setParent1] = useState();
  const [parent2, setParent2] = useState();
  const [city1, setCity1] = useState();
  const [JorS1, setJorS1] = useState('judeţul');
  const [js1, setJS1] = useState();
  const [str1, setStr1] = useState();
  const [no1, setNo1] = useState();
  const [bl1, setBl1] = useState();
  const [et1, setEt1] = useState();
  const [ap1, setAp1] = useState();
  const [CI, setCI] = useState('CI');
  const [cnp, setCNP] = useState();
  const [serie,setSerie] = useState();
  const [CINo, setCINo] = useState();


  const[c1,setC1] = useState(false);
  const[c2,setC2] = useState(false);
  const[c3,setC3] = useState(false);
  const[c4,setC4] = useState(false);
  const[c5,setC5] = useState(false);
  const[c6,setC6] = useState(false);
  const[c7,setC7] = useState(false);
  

  //second

  const [city2, setCity2] = useState();
  const [JorS2, setJorS2] = useState('judeţul');
  const [js2, setJS2] = useState();
  const [str2, setStr2] = useState();
  const [no2, setNo2] = useState();
  const [bl2, setBl2] = useState();
  const [et2, setEt2] = useState();
  const [ap2, setAp2] = useState();

  //third

  const [hour1, setHour1] = useState();
  const [hour2, setHour2] = useState();
  const [loc1, setLoc1] = useState();
  const [loc2, setLoc2] = useState();


  const[prob, setProb] = useState();
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();
  const [signature, setSignature] = useState();

  const generateDeclaration = () => {
    document.getElementById('formModel').classList.add('hide');
    document.getElementById('completeModel').classList.remove('hide');
    document.getElementById('getPDF').classList.remove('hide');
  }

  const convert2PDF = () => {
      html2canvas(document.getElementById('completeModel')).then(function(canvas) {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', -150, 15 );
      pdf.save("declaratie.pdf");  
  });
  }

  return (
    <>
    <button id="getPDF" className="btnPDF hide" onClick={() => convert2PDF()}>Salveaza PDF</button>
    <br/>
    <div className="form" id="formModel">
        <h3>Declaraţie pe proprie răspundere</h3>
        <p id="first">
        &nbsp;&nbsp;&nbsp;&nbsp;Subsemnatul(a) <input type="text" onChange={(e) => setSubs(e.target.value)}></input>,  &nbsp;
        <select id="select1" onChange={event => setGen(event.nativeEvent.target[event.nativeEvent.target.selectedIndex].text)}>
          <option value="1">fiul</option>
          <option value="2">fiica</option>
        </select> 
        &nbsp;
        lui <input type="text" onChange={(e) => setParent1(e.target.value)}></input>   &nbsp;
        și al <input type="text" onChange={(e) => setParent2(e.target.value)}></input> &nbsp;
        domiciliat(ă) în <input type="text" onChange={(e) => setCity1(e.target.value)}></input>  &nbsp;
        <select id="select1132" onChange={event => setJorS1(event.nativeEvent.target[event.nativeEvent.target.selectedIndex].text)}>
          <option value="1">judeţul</option>
          <option value="2">sectorul</option>
        </select> &nbsp;
         <input type="text" className="medium" onChange={(e) => setJS1(e.target.value)}></input>,  &nbsp;
        strada  <input type="text" onChange={(e) => setStr1(e.target.value)}></input>,  &nbsp;
        număr <input type="text" className="small" onChange={(e) => setNo1(e.target.value)}></input>,  &nbsp;
        bloc <input type="text" className="small" onChange={(e) => setBl1(e.target.value)}></input>,  &nbsp;
        etaj <input type="text" className="small"onChange={(e) => setEt1(e.target.value)}></input>, &nbsp;
        apartament <input type="text" className="small"onChange={(e) => setAp1(e.target.value)}></input>, &nbsp;
        având CNP <input type="text" onChange={(e) => setCNP(e.target.value)}></input>, &nbsp;
        <select id="select2" onChange={event => setCI(event.nativeEvent.target[event.nativeEvent.target.selectedIndex].text)}>
          <option value="1">CI</option>
          <option value="2">BI</option>
        </select> &nbsp;
        seria <input type="text" className="small"onChange={(e) => setSerie(e.target.value)}></input>, &nbsp;
        număr <input type="text" className="medium"onChange={(e) => setCINo(e.target.value)}></input>, &nbsp;
        </p>
        <p id="second">
        &nbsp;&nbsp;&nbsp;&nbsp;Locuind în fapt<sup>1</sup> în localitatea <input type="text" onChange={(e) => setCity2(e.target.value)}></input>,
        <select id="select1112332" onChange={ e => setJorS2(e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text)}>
          <option value="1">judeţul</option>
          <option value="2">sectorul</option>
        </select> &nbsp; <input type="text" className="small" onChange={(e) => setJS2(e.target.value)}></input>, 
        strada  <input type="text" onChange={(e) => setStr2(e.target.value)}></input>, 
        număr <input type="text" className="small" onChange={(e) => setNo2(e.target.value)}></input>, 
        bloc <input type="text" className="small" onChange={(e) => setBl2(e.target.value)}></input>, 
        etaj <input type="text" className="small"onChange={(e) => setEt2(e.target.value)}></input>, 
        apartament <input type="text" className="small"onChange={(e) => setAp2(e.target.value)}></input>
        </p>
        <p id="second">
        &nbsp;&nbsp;&nbsp;&nbsp;Cunoscând prevederile articolului 326, referitoare la falsul în declarații<sup>2</sup>, precum și ale art. 352 referitoare la  zădărnicirea combaterii bolilor din Noul Cod Penal, declar pe proprie răspundere faptul că mă deplasez în interes profesional/personal, între orele &nbsp;
        <input type="text" className="hour"onChange={(e) => setHour1(e.target.value)}></input> - <input type="text" className="hour"onChange={(e) => setHour2(e.target.value)}></input> <br/>
        de la <input type="text" className="adress ad1" onChange={(e) => setLoc1(e.target.value)}></input> <br/>
        până la <input type="text" className="adress"  onChange={(e) => setLoc2(e.target.value)}></input> pentru<sup>3</sup>:
        </p>
        <ul>
          <li> <input checked={c1} type="checkbox" value="0" onChange={()=>setC1(!c1)}/>
            deplasarea între domiciliu și locul de muncă, atunci când activitatea profesională este esențială și nu poate fi organizată sub formă de lucru la distanță sau deplasarea în interes profesional care nu poate fi amânată. 
          </li>
          <li> <input checked={c2} className="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="1" onChange={() => setC2(!c2) }/>consult medical de specialitate care nu poate fi amânat; </li>
          <li> <input checked={c3} type="checkbox" value="2" onChange={()=>setC3(!c3)}/>deplasare pentru cumpărături de primă necesitate la unități comerciale din zona de domiciliu;</li>
          <li> <input checked={c4} type="checkbox" onChange={()=>setC4(!c4)}/>deplasare pentru asigurarea asistenței pentru persoane în vârstă, vulnerabile sau pentru însoțirea copiilor; </li>
          <li> <input checked={c5} type="checkbox" onChange={()=>setC5(!c5)}/>deplasare scurtă, lângă domiciliu, pentru desfășurarea de activități fizice individuale, în aer liber, cu excluderea oricărei forme de activitate sportivă colectivă; </li>
          <li> <input checked={c6} type="checkbox" onChange={()=>setC6(!c6)}/>deplasare scurtă, lângă domiciliu, legată de nevoile animalelor de companie </li>
          <li> <input checked={c7} type="checkbox" onChange={()=>setC7(!c7)}/>deplasare pentru rezolvarea următoarei situații urgente: <textarea type="text"   rows="3" onChange={e=> setProb(e.target.value)}></textarea></li>
        </ul>
        <p id="second">
        
         
         Data &nbsp; 
         <input type="text" placeholder="ZZ" className="small"onChange={(e) => setDay(e.target.value)}></input>&nbsp; 
         <input type="text" placeholder="LL"className="small"onChange={(e) => setMonth(e.target.value)}></input>&nbsp; 
         <input type="text" placeholder="AAAA" className="medium"onChange={(e) => setYear(e.target.value)}></input>
         <br/>
         
         Semnatura &nbsp; <input type="text"  className="medium"onChange={(e) => setSignature(e.target.value)}></input>
         <button className="btn" onClick={generateDeclaration}>GENEREAZĂ</button>
        </p>
    </div>  
    <div id="completeModel" className="hide">
      <h3>Declaraţie pe proprie răspundere</h3>
      <br/>
      <span id="first1" style={{display:'inline-block'}}>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Subsemnatul(a) <strong>{subs}</strong>, {gen} lui {parent1} şi al lui {parent2}, domiciliat în {city1}, {JorS1} {js1}, strada {str1}, număr {no1}, bloc {bl1}, etaj {et1}, apartament {ap1}, având CNP <strong>{cnp}</strong>, {CI} seria {serie}, număr {CINo},
      Locuind de fapt1 în localitatea {city2}, {JorS2} {js2}, strada {str2}, număr {no2}, bloc {bl2}, etaj {et2}, apratament {ap2}.
      </span>
      <br/>
      <br/>
      <span id="first1" style={{display:'inline-block'}}>  
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Cunoscând prevederile articolului 326, referitoare la falsul în declarații<sup>2</sup>, precum și ale art. 352 referitoare la zădărnicirea combaterii bolilor din Noul Cod Penal, declar pe  proprie răspundere faptul că mă deplasez în interes profesional/personal, între orele <strong>{hour1} - {hour2}</strong>, de la <strong> {loc1} </strong> , până la <strong> {loc2} </strong>, pentru<sup>3</sup>:
      </span>
      <ul style={{textAlign:'left', width: '400px'}}>
          <li>
          &nbsp;&nbsp;&nbsp;
            {
              c1 ? (<img src={require('./img/tick.png')} className="checked"/>) :  (<img src={require('./img/cancel.png')} className="checked"/>)
            }&nbsp;
            deplasarea între domiciliu și locul de muncă, atunci când activitatea profesională este esențială și nu poate fi organizată sub formă de lucru la distanță sau deplasarea în interes profesional care nu poate fi amânată. 
          </li>
          <br/>
          <li>&nbsp;&nbsp;&nbsp;
            {
              c2 ? (<img src={require('./img/tick.png')} className="checked"/>) :  (<img src={require('./img/cancel.png')} className="checked"/>)
            }&nbsp;
            consult medical de specialitate care nu poate fi amânat; </li><br/>
          <li>&nbsp;&nbsp;&nbsp;
            {
              c3 ? (<img src={require('./img/tick.png')} className="checked"/>) :  (<img src={require('./img/cancel.png')} className="checked"/>)
            }&nbsp;
            deplasare pentru cumpărături de primă necesitate la unități comerciale din zona de domiciliu;</li><br/>
          <li>&nbsp;&nbsp;&nbsp;
            {
              c4 ? (<img src={require('./img/tick.png')} className="checked"/>) :  (<img src={require('./img/cancel.png')} className="checked"/>)
            }&nbsp;
            
            deplasare pentru asigurarea asistenței pentru persoane în vârstă, vulnerabile sau pentru însoțirea copiilor; </li><br/>
          <li>&nbsp;&nbsp;&nbsp;
            {
              c5 ? (<img src={require('./img/tick.png')} className="checked"/>) :  (<img src={require('./img/cancel.png')} className="checked"/>)
            }&nbsp;
            
            deplasare scurtă, lângă domiciliu, pentru desfășurarea de activități fizice individuale, în aer liber, cu excluderea oricărei forme de activitate sportivă colectivă; </li><br/>
          <li>&nbsp;&nbsp;&nbsp;
            {
              c6 ? (<img src={require('./img/tick.png')} className="checked"/>) :  (<img src={require('./img/cancel.png')} className="checked"/>)
            }&nbsp;deplasare scurtă, lângă domiciliu, legată de nevoile animalelor de companie </li><br/>
          <li><div>&nbsp;&nbsp;&nbsp;
            {
              c7 ? (<img src={require('./img/tick.png')} className="checked"/>) :  (<img src={require('./img/cancel.png')} className="checked"/>)
            }&nbsp;
            deplasare pentru rezolvarea următoarei situații urgente: <br/><strong className="customProblem">{prob}</strong> </div> </li>
        </ul>
        <div style={{marginTop:'20px'}}>
          <span style={{textAlign: 'left',display:'inline-block', width: '400px'}}>&nbsp;&nbsp;&nbsp;&nbsp;Atât declar, susțin și semnez.</span>
          <br/>
          <br/>
          <span style={{textAlign: 'left',display:'inline-block', width: '200px'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data {day}/{month}/{year}</span>
          
          <span  style={{textAlign: 'right',display:'inline-block', width: '200px'}}>Semnătura, {signature}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        </div>
          <hr style={{width: '400px', margin: '10px auto auto auto'}}/>
          <span style={{fontSize: '12px',display:'inline-block', width: '400px', textAlign: 'left'}}>
          <sup>1</sup> Se declară situația în care persoana nu locuiește la domiciliul prevăzut în actul de identitate. 
          <br/>
          <sup>2</sup> Declararea necorespunzătoare a adevărului, făcută unei persoane dintre cele prevăzute în art. 175 sau unei unităţi în care aceasta îşi desfăşoară activitatea în vederea producerii unei consecinţe juridice, pentru sine sau pentru altul, atunci când, potrivit legii ori împrejurărilor, declaraţia făcută serveşte la producerea acelei consecinţe, se pedepseşte cu închisoare de la 3 luni la 2 ani sau cu amendă. 
          <br/>
          <sup>3</sup> Se completează motivul/cauzele deplasării. 
          </span>
          <br/>
          <br/>
    </div>
    </>
  );
}

export default App;
