const CrytpoJS = require('crypto-js')
/**
 * jwt - Json Web Token
 */
class JWT {

    /**
     * encodeBase64
     */
    encodeBase64 (source) {
        const encodeSource = CrytpoJS.enc.Utf8.parse(JSON.stringify(source))


        return CrytpoJS.enc.Base64.stringify(encodeSource)
            .replace(/=+$/,'')
            .replace(/\+/g,'-')
            .replace(/\//g,'-')
    }

    /**
     * EncodeSHA256
     */
    encodeSHA256 (source) {
        const secret = 'secret'
        let encodeSource = CrytpoJS.enc.Utf8.parse(JSON.stringify(source))

        encodeSource = CrytpoJS.HmacSHA256(encodeSource, secret)
        return this.encodeBase64(encodeSource)
    }

    /**
     * jwtgenerator
     * @param {*} user
     */
    jwtgenerator (user) {
        if (!user.id && !user.email) {
            return new Error('[ERROR] JwtGenerator() -> user id or email is missing !')
        }

        const header = { alg: 'HS256', typ: 'JWT'}
        const payload = { id: user.id, email: user.email }
        const signature = { header, payload, timestamp: Date.now() }

        return {
            header: this.encodeBase64(header),
            payload: this.encodeBase64(payload),
            signature: this.encodeSHA256(signature)
        }
    }

    /**
     *
     * @param token
     */
    saveToken (token) {
        if (process.env.TOKENS) {
            const tokens = process.env.TOKENS.split(',')
            tokens.push(token)
            process.env.TOKENS = tokens.join(',')
            return
        }
        process.env.TOKENS = token

    }

    getTokens () {
        return process.env.TOKENS.split(',')
    }

    getToken (tokenSource) {
        const tokens = this.getTokens()

        return tokens.filter(token => token === tokenSource ? token : false)[0] || false
    }

    verify (tokenSource) {
        return new Promise((resolve, reject ) => {
            this.getToken(tokenSource) ? resolve(true) : resolve(false)
        })
    }

    middleware()
}

module.exports = JWT