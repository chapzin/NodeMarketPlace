const Mail = require('../services/Mail')

class PurchaseMail {
  get key () {
    return 'PurchaseMail'
  }

  async handle (job, done) {
    const { ad, user, content } = job.data

    await Mail.sendMail(
      {
        from: '"Ricardo Gomes" <chapzin@gmail.com>',
        to: ad.author.email,
        subject: `Solicitação de compra: ${ad.title}`,
        template: 'purchase',
        context: { user, content, ad: ad }
      },
      (err, success) => {
        if (!err) {
          console.log(err)
        }
        console.log(success)
      }
    )
    return done()
  }
}

module.exports = new PurchaseMail()
