## meteor-identicon

Client-side [identicon](http://en.wikipedia.org/wiki/Identicon) generation for [Meteor](http://meteor.com) using 
[blockies](https://github.com/download13/blockies).

## Usage

Add package to your project:

```console
meteor add mistereo:identicon
```

Now you can use `identicon` helper in your templates:

```handlebars
<img src="{{identicon 'seed'}}"></img>
```

You can pass options to [blockies](https://github.com/download13/blockies) like this:

```handlebars
<img src="{{identicon 'seed' size=15 scale=3}}"></img>
```

## License

The MIT License (MIT)
