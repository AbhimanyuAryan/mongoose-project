{
    "extends": "./node_modules/@adonisjs/mrm-preset/_tsconfig",
    "compilerOptions": {
      "target": "es6",
      "module": "commonjs",
      "moduleResolution": "node",
      "strict": true,
      "experimentalDecorators": true,
      "emitDecoratorMetadata": true,
      "noUnusedLocals": true,
      "pretty": true,
      "lib": [
        "esnext"
      ],
      "types": [
        "@types/node",
        "@adonisjs/core"
      ]
    }
  }
  