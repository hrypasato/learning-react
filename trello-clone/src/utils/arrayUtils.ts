type Item = {
    id: string,
}

export const findItemIndexById = <T extends Item>(items: T[], id: string) => {
    return items.findIndex((item:T) => item.id === id)
}   

export const moveItem = <T>(array: T[], fromIndex: number, toIndex: number) => {
    const item = array[fromIndex];
    return insertItemAtIndex(removeItemAtIndex(array, fromIndex), item, toIndex);
}

export function removeItemAtIndex<T>(array: T[], index: number): T[] {
    return [
        ...array.slice(0, index),
        ...array.slice(index + 1)
    ];
}

export function insertItemAtIndex<T>(array: T[], item: T, index: number): T[] {
    return [
        ...array.slice(0, index),
        item,
        ...array.slice(index)
    ];
}