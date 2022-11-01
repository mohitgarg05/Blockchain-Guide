import React , {useState} from 'react'
import style from '../../styles/lesson1.module.css'
import Convert from './hashfunction'

const index = () => {

    const [Data, setData] = useState();
    const [Res, setRes] = useState()

  

    const handleChange = async(e)=>{
        setData(e.target.value)
        const Response = await Convert(e.target.value);
        setRes(Response);
        console.log(Response)
    }
    


  return (
    <div className={style.container}>
        <div className={style.lesson1}>
            <h1>Hashing technique</h1>
        </div>
        <div className={style.visualhash}>
            <div className={style.div}>
              <div><h4>Data:</h4></div>
                <div>
                  <textarea id='data_text' 
                  rows='9' 
                  cols='100' 
                  value={Data} 
                  onChange={(e)=>handleChange(e)} />
                </div>
            </div>
            <div className={style.div_hash}>
              <div><h3>SHA-256: </h3></div>
              <div><input value={Data?Res:""} /></div>
            </div>
          </div>

        <div className={style.hash}>
          <h2>What is Hash?</h2>
          <p>A hash is a mathematical function that converts an input of arbitrary length into an encrypted output of a fixed length.
          Thus regardless of the original amount of data or file size involved, its unique hash will always be the same size. </p>
          <h4>Key points on hash</h4>
          <ul>
            <li>A hash is a function that meets the encrypted demands needed to solve for a blockchain computation.</li>
            <li>Hashes are of a fixed length since it makes it nearly impossible to guess the length of the hash if someone was trying to crack the blockchain.</li>
            <li>The same data will always produce the same hashed value.</li>
            <li>A hash, like a nonce or a solution, is the backbone of the blockchain network.</li>
            <li>A hash is developed based on the information present in the block header.</li>
          </ul>
          <h4>How Hash works?</h4>
          <p>Typical hash functions take inputs of variable lengths to return outputs of a fixed length. 
          A cryptographic hash function combines the message-passing capabilities of hash 
            functions with security properties.Cryptographic hash functions add security features to typical hash functions, 
            making it more difficult to detect the contents of a
             message or information about recipients and senders. </p>
          <h4>Hashing and Cryptocurrencies</h4>
          <p>The backbone of a cryptocurrency is the blockchain, which is a global ledger formed by 
          linking together individual blocks of transaction data. The blockchain only contains 
          validated transactions, which prevents fraudulent transactions and double spending of the currency. 
          The resulting encrypted value is a series of numbers and letters that do not resemble the original data 
            and is called a hash. Cryptocurrency mining involves working with this hash.</p>
          <p>Hashing requires processing the data from a block through a mathematical function, which results in an 
          output of a fixed length. Using a fixed-length output increases security 
          since anyone trying to decrypt the hash would not be able to tell how long or short
           the input is simply by looking at the length of the output.</p>
           <h4>SHA-256</h4>
          <p>SHA-256 is the most famous of all cryptographic hash functions because it is used extensively in blockchain technology. 
          The SHA-256 Hashing algorithm was developed by the National Security Agency (NSA) in 2001. </p> 
          </div>

        


    </div>
  )
}

export default index