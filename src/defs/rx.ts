import { OperatorFunction } from "rxjs";
import { map } from "rxjs/operators";

type RecordKey = number | string | symbol;

function toDict<T, K extends keyof T, V extends T[K] & RecordKey>(list: T[], key: K): Record<V, T> {
    let obj: Record<V, T> = Object.create({});
    for (const elem of list) {
        obj[elem[key] as V] = elem;
    }
    return obj;
}

function toMultiDict<T, K extends keyof T, V extends T[K] & RecordKey>(list: T[], key: K): Record<V, T[]> {
    let obj: Record<V, T[]> = Object.create({});
    for (const elem of list) {
        const k = elem[key] as V;
        if (!(k in obj)) obj[k] = [];
        obj[k].push(elem);
    }
    return obj;
}

export function mapToDict<T, K extends keyof T, V extends T[K] & RecordKey>(key: K): OperatorFunction<T[], Record<V, T>> {
    return map(list => toDict(list, key))
}

export function mapToMultiDict<T, K extends keyof T, V extends T[K] & RecordKey>(key: K): OperatorFunction<T[], Record<V, T[]>> {
    return map(list => toMultiDict(list, key))
}

/// Utility function
export function pick<K extends RecordKey, T>(id: K): OperatorFunction<Record<K, T>, T | undefined> {
    return map(x => x[id])
}

export function values<K extends RecordKey, T>(): OperatorFunction<Record<K, T>, T[]> {
    return map(Object.values)
}

export function valueSet<K extends RecordKey, T>(): OperatorFunction<Record<K, T>, Set<T>> {
    return map(data => {
        let set = new Set<T>();
        for (const v of Object.values<T>(data)) {
            if (v) set.add(v);
        }
        return set;
    })
}

export function mapArr<T, V>(f: (v: T) => V): OperatorFunction<T[], V[]> {
    return map(data => Array.from(data, f).filter(v => v));
}

export function mapRec<K extends RecordKey, T, V>(f: (v: T) => V): OperatorFunction<Record<K, T>, Record<K, V>> {
    function mapper(src: Record<K, T>): Record<K, V> {
        let dict = Object.create({})
        for (const [key, value] of Object.entries(src)) {
            dict[key] = f(value as T);
        }
        return dict;
    }
    return map(mapper);
}

export function recToSet<K extends RecordKey, T, V>(f: (v: T) => V): OperatorFunction<Record<K, T>, Set<V>> {
    function mapper(src: Record<K, T>): Set<V> {
        let set = new Set<V>();
        for (const val of Object.values(src)) {
            const v = f(val as T)
            if (v) set.add(v);
        }
        return set;
    }
    return map(mapper);
}

export function setValues<T>(): OperatorFunction<Set<T>, T[]> {
    return map(s => Array.from(s.values()));
}
