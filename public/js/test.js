const characterStatRandomizer = async () => {
    let statArr = [];
    for (let i = 0; i < 6; i++) {
        const response = await fetch("dice/4/6", {
            method: "POST",
        });
        let arr1 = response.split(":")
        ["4d6:", "[2, 5, 5, 3] = 15]"]
        let arr2 = arr1[1].split("=")
        ["[2, 5, 5, 3] "," 15"]
        (arr2[0] == "[2, 5, 5, 3]")
        const strArr = ["[2", "5", "5", "3]"]
        strArr.map(e=> {e.replace(regex)})
        newArr.map(e => parseInt(e))
        
    }
};

characterStatRandomizer()