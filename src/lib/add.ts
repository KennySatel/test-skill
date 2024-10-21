// NE PAS MODIFIER
export default async function add(data: any) {
    return new Promise<void>((resolve) => {
        setTimeout(async () => {
            data.stock = Math.ceil(Math.random() * 10);
            resolve();
        }, 1000)
    });
}