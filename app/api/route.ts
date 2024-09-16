import { codeRepo } from "@/helpers/code.repository";

export const revalidate = 60;

export async function GET() {
    return new Response(JSON.stringify(codeRepo.getAll()), {
        headers: { 'Content-Type': 'application/json' },
    });
}

