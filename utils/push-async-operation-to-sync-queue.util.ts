/**
 * set all async operations to queue
 */
class Mutex {
    private lock = false;
    private waiters = [];

    public async acquire() {
        // while will prevent call promise below and complete function 'acquire'
        while (true) {
            if (this.lock === false) {
                //lock queue
                this.lock = true;
                //return to user callback, when user execute this callback, queue will be unlocked
                return this.unlockQueue.bind(this);
            }

            // lock is already acquired, wait for it to be released
            await new Promise(resolve => this.waiters.push(resolve));
        }
    }

    private unlockQueue() {
        // unlock
        this.lock = false;
        // check if there are any waiting threads
        if (this.waiters.length > 0)
            (this.waiters.shift())();

    }

    public resetQueue() {
        this.lock = false;
        this.waiters = []
    }
}

//example

const mutex = new Mutex();

async function processMessage(data: { id: number }) {
    const release = await mutex.acquire();

    await new Promise(resolve => setTimeout(resolve, 1000))
        .finally(() => {
            console.log(`Finished processing id: ${data.id} ${new Date().getTime()}`);
            release();
        });
}

const data = [
    {id: 1 },
    {id: 2 },
    {id: 3 },
    {id: 4 },
    {id: 5 },
    {id: 6 },
    {id: 7 },
    {id: 8 },
    {id: 9 },
    {id: 10 }
];


Promise.all(data.map(async (data) => {
    console.log(data, new Date().getTime());

    await processMessage(data);
}));
