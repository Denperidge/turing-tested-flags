module.exports = {
    filters: {
        'get-thanks-to' : function (text, options) {
            let split = text.split("## ");
            let thanksTo;
            split.forEach(part => {
                if (part.toLowerCase().startsWith("thanks to")) {
                    thanksTo = part;
                }
            });
            thanksTo = thanksTo.replace(/thanks to/i, "Thanks to...")

            return thanksTo;
        }
    }

   
}