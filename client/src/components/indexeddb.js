import Dexie from "dexie";

export const IdbInit = () => {
    const db = new Dexie("localDB")
    db.version(1).stores({
        saved: "_id, text, image, linkSource, source, topic, category, tool, time, c_id",
        collections: "++_id, name, icon"
    });
    return db
}

export const getSavedData = async (keys) => {
    const db = IdbInit()
    const saved = await db.saved.toArray()
    return saved
}

export const getSavedKeys = async () => {
    const db = IdbInit()
    const savedKeys = await db.saved.orderBy('_id').keys()
    return savedKeys
}

export const deleteData = (_id) => {
    const db = IdbInit()
    db.saved.delete(_id)
}

export const saveData = (obj) => {
    const db = IdbInit()
    console.log('Created')
    db.saved.add(obj).then((e)=>{
        console.log('Saved')
    }).catch((err)=>{
        console.log(err.message)
    })
}

export const saveCollection = async (obj) => {
    const db = IdbInit()
    // db.collections.add(obj).then((e)=>{
    //     console.log('Saved')
    // }).catch((err)=>{
    //     console.log(err.message)
    // })
    try{
        const saved = await db.collections.add(obj)
        console.log('Created Collection')
        return saved
    }catch(err){
        console.log(err)
    }
}

export const getCollection = async () =>{
    const db = IdbInit()
    const savedCol = await db.collections.toArray()
    return savedCol
}

export const getCollectionKeys = async () =>{
    const db = IdbInit()
    const keys = await db.collections.orderBy('_id').keys()
    return keys
}

export const getCollectionItems = async (id) => {
    const db = IdbInit()
    try{
        const data = await db.saved.where({c_id: id}).toArray()
        const collection = await db.collections.get(id)
        return {data: data,collection: collection}
    }catch(err){
        console.log(err)
    }
}

export const deleteCollection = (_id) => {
    const db = IdbInit()
    db.collections.delete(_id)
}