import { CodeI } from '@/types/Code';
import fs from 'fs';
import path from 'path';
import { nanoid } from 'nanoid'
import { CreateCodeI } from '@/types/CreateCode';


// Resolve the path to the data file
const dataFilePath = path.resolve(process.cwd(), 'data/code.json');

// Read and parse the JSON file
// eslint-disable-next-line prefer-const
let codes: CodeI[] = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));

export const codeRepo = {
    getAll: () => codes,
    getById: (id: string) => codes.find(x => x.id === id),
    create,
    update,
};

function create(code: CreateCodeI) {
    // Generate new code ID
    const newCode = {
        ...code,
        id:  nanoid(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),

    } as CodeI;

    // Add and save code
    codes.push(newCode);
    saveData();
}

function update(id: string, params: Partial<CodeI>) {
    const codeIndex = codes.findIndex(x => x.id === id);

    if (codeIndex === -1) {
        throw new Error('Code not found');
    }

    // Update the code with the new parameters
    codes[codeIndex] = {
        ...codes[codeIndex],
        ...params,
        updatedAt: new Date().toISOString(), // Update the timestamp
    };

    // Save the updated codes array to the file
    saveData();
}

// Private helper functions

function saveData() {
    fs.writeFileSync(dataFilePath, JSON.stringify(codes, null, 4));
}
