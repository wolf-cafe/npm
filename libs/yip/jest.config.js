module.exports = {
  name: 'yip',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/yip',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
