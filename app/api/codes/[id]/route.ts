import { codeRepo } from "@/helpers/code.repository";
import { NextRequest } from "next/server";

export const revalidate = 60;

export async function GET(request: NextRequest
    ,{params}:{ params:{id:string}}
) {
    console.log("^",request,params)
    return new Response(JSON.stringify(codeRepo.getById(params.id)), {
        headers: { 'Content-Type': 'application/json' },
    });
   
}
export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
    try {
        // Extraire les données du corps de la requête
        const requestData = await request.json();

        // Mettre à jour l'élément avec l'ID et les nouvelles données
        const updatedCode = codeRepo.update(params.id, requestData);

        return new Response(JSON.stringify(updatedCode), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Error updating code' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

