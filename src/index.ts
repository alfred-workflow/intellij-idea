import alfred, {OutputItem} from "@alfred-workflows/core";
import jetbrains from "@liangshen/jetbrains"

const items: OutputItem[] = [{arg: '', title: 'Open', subtitle: ''}]
try {
    const recentProjectsManager = jetbrains.getRecentProjectsManagerSync('IntelliJIdea');


    items.push(...[...recentProjectsManager.additionalInfo.entries()].reverse().map(([key, value]) => ({
        arg: key,
        variables: {
            opened: value.opened
        },
        title: `${value.frameTitle?.split(' –')[0] ?? key.slice(key.lastIndexOf('/') + 1)}${value.opened === 'true' ? '(opened)' : ''}`,
        subtitle: key
    })));
} catch (e) {
}
alfred.output({items}, ['title']);