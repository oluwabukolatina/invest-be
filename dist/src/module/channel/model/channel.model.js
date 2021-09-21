"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ChannelSchema = new mongoose_1.Schema({
    name: String,
    description: String,
    members: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
}, { timestamps: true });
exports.default = mongoose_1.model('Channel', ChannelSchema);
//# sourceMappingURL=channel.model.js.map