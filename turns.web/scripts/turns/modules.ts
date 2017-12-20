namespace turns {
    var modules: { [name: string]: Function } = {};    

    export function module(name: string, constructor: Function): void {
        modules[name] = constructor;
    }

    function init() {
        $("[turns-play]").each((i, e) => {
            var element = $(e);
            var moduleName = element.attr("turns-play");        
            var module = modules[moduleName];
            module(element);
        });
    }

    $(init);
}