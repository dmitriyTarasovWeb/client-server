import mongoose from "mongoose";

const RoomSchema = new mongoose.Schema({
  rid: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  image_url: { type: String },
  last_track_id: { type: String, default: "wDsU4H2w48k" },
  last_track_thumbnail: {
    type: String,
    default:
      "https://i.ytimg.com/vi/wDsU4H2w48k/default.jpg",
  },
  last_track_name: { type: String, default: "MORGENSHTERN - Cristal &amp;amp; МОЁТ (Клип + итоги 2020 года)" },
  last_track_channel: { type: String, default: "MORGENSHTERN" },
  last_track_playing: { type: Boolean, default: false },
  last_track_progress: { type: Number, default: 0 },
  last_track_timestamp: { type: Number, default: 0 },
});

const Room = mongoose.model("room", RoomSchema);

export default Room;
