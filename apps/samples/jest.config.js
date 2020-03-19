module.exports = {
  name: 'samples',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/samples',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
