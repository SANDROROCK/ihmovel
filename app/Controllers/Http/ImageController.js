'use strict'

const Image = use ('App/Models/Image')
const Property = use ('App/Models/Property')
const Helpers = use ('Helpers')


class ImageController {



    async store({params,request}){
        const Property = await Property.findOrFail(params.id)
        const images = request.file('images',{
            types:['image'],
            size:'2mb'
        })

        await images.moveAll(Helpers.tmpPath('uploads'),file=>({
            name:`${Date.now()-$}`
        }))

        if(!images.movedAll()){
            return images.errors()
        }
        await Promisse.all(
            images
                .movedList()
                .map(image=>property.images().create({path:image.fileName}))
        )
    }

}

module.exports = ImageController
