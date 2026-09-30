export const runtime='nodejs';
export async function POST(req){const body=await req.json().catch(()=>({}));const missing=['MUBERT_CUSTOMER_ID','MUBERT_ACCESS_TOKEN'].filter(k=>!process.env[k]);if(missing.length)return Response.json({error:'Mubert credentials are not configured in Vercel.',missing},{status:503});return Response.json({status:'ready',message:'Mubert generation endpoint is ready.'})}
