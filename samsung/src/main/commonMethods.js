export class CommonMethods{

    constructor(){
    }

    async createDynamicLocator(locatorString, replaceText, replacementValue) {
        return locatorString.replace(replaceText, replacementValue);
      }

}