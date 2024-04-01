

export default function SearchApp() {
    function SearchOnKeyUp(event: any): void {
        console.log("I am just now seraching", event.target.value);
        //      throw new Error("Function not implemented.");
    }

    return (
        <div>
            <input onKeyDown={SearchOnKeyUp}></input>

        </div>
    )



}