// import { useRouter } from 'next/router';
 
// export default function Page() {
//   const router = useRouter();
//   return <p>Post: {router.query.slug}</p>;
// }
import { ObjectId } from "mongodb";
import clientPromise from "../../lib/mongodb";

export default async (req, res) => {
    
  try { 
    const id = req.query.id;
    console.log(req.query.id);   
   const client = await clientPromise;
   const db = client.db("JWDB");

   const witnesses = db.collection("users");
   const witness = await witnesses.findOne({ _id:ObjectId(id)});
   if(witness){
       res.json(witness);
   }else{
       res.status(404).json({message: "Witness not found"})
   } 
     } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Internal server error" });  
  }
};