import mongoose from 'mongoose';

const exampleSchema = new mongoose.Schema({
  name: String,
  value: String,
});

// コレクション名を明示的に"Example"として指定
export const Example = mongoose.model('Example', exampleSchema, 'Example');

