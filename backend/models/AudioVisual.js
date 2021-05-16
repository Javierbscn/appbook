const { Schema, model } = require('mongoose')

const FilmSchema = new Schema({
    director:     { type: String, required: true },
    productor:    { type: String, required: true},
    distributor:  { type: String, required: true},
    created_at:   { type: Date, default: Date.now },
    isbn:         { type: String, required: true },
    image_path:   { type: String },
    public_id:    { type: String },
    title:        { type: String, required: true  },
    budget:       { type: Integer, required:true  },
    world_tax:    { type: Integer, required:true  },
    duration:     { type: Integer, required:true  }
})


const AnimeSchema = new Schema({
    director:     { type: String, required: true },
    productor:    { type: String, required: true},
    distributor:  { type: String, required: true},
    created_at:   { type: Date, default: Date.now },
    isbn:         { type: String, required: true },
    image_path:   { type: String },
    public_id:    { type: String },
    title:        { type: String, required: true  },
    budget:       { type: Integer, required:true  },
    world_tax:    { type: Integer, required:true  },
    seasons:      { type: Integer, required:true  },
    duration_ep:  { type: Integer, required:true  }
})

module.exports = {
    film:   model('Film', FilmSchema),
    anime:  model('Anime', AnimeSchema)
}
    
