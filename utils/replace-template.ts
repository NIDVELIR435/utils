import { template, words, isEmpty, difference } from "lodash";



/**
 * checks compare template with params and if it fully matches, will replace template,
 * otherwise return explain what wrong
 * @param templateMessage [string] - some string with template inside
 * @param params [Object] - params where each key is template param name
 * @example
 * replaceTemplate('hello {user}. {message}', {user: 'Yaroslav', message: 'You have one new message.', };
 * // returns => 'hello Yaroslav. You have one new message.'
 * replaceTemplate('hello {user}. {message}', {user: 'Yaroslav', message: 'You have one new message.', count: '3'});
 * // returns => 'found keys in params: [count], but didn't find keys inside template'
 * replaceTemplate('hello {user}. {message}. {count}', {user: 'Yaroslav', message: 'You have new message.'});
 * // returns => 'found template words: [count], but didn't find keys inside params'
 * @return string
 */
export const replaceTemplate = (templateMessage: string, params: {[key in string ]: string}): string => {
    const keywords = Object.keys(params ?? {});

    if(isEmpty(keywords)) return 'cannot find keywords in the params'

    const templateKeywords = words(templateMessage,/{([\s\S]+?)}/g)
        .map((keyword)=> keyword
            .replace('{', '')
            .replace('}','')
        );

    if(isEmpty(templateKeywords)) return 'cannot find keywords in the template'

    const templateDiffer = difference(templateKeywords, keywords);
    if(!isEmpty(templateDiffer)) return `found template words: [${templateDiffer.join(', ')}], but didn't find keys inside params`

    const paramsDiffer = difference(keywords, templateKeywords);
    if(!isEmpty(paramsDiffer)) return `found keys in params: [${paramsDiffer.join(', ')}], but didn't find keys inside template`

    return template(templateMessage, {interpolate: /{([\s\S]+?)}/g})(params)
};

//example
console.log(replaceTemplate('hello {users}. {lists}, {some}', {some: "2", users: 'Yaroslav', lists: '1- 2-2-34234', }));
