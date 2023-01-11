import { defineStore } from 'pinia'
const baseUrl = "http://localhost:3000"
import axios, { Axios } from 'axios'

export const mainFunction = defineStore('main_function', {
  state: () => ({
    isLogged: false,
    myDecks: [],
    cardDecks: [],
    deckName: '',
    query: {
      id:"", name:"", type: "", atk: "", def: "", level: "", race: "", attribute: "", banlist: "", sort: "", frameType: "", desc: "", fname: '', desc: ''
    },
    cards: [],
    selectedCard: [],
  }),
  getters: {
  },
  actions: {
    callback(response) {
      axios({
        method: "post",
        url: baseUrl + '/google-sign-in',
        headers: {
          access_token_google: response.credential
        }
      })
        .then(result => {
          this.isLogged = true
          this.router.push('/')
          localStorage.setItem("access_token", result.data.access_token)
        })
        .catch(err => {
          console.log(err)
        })
    },
    async login(dataUser) {
      try {
        const data = await axios({
          method: 'post',
          url: `${baseUrl}/login`,
          data: {
            username: dataUser.username,
            password: dataUser.password
          }
        })
        this.isLogged = true
        localStorage.setItem("access_token", data.data.access_token)
        this.router.push('/')
      } catch (error) {
        console.log(error)
      }
    },
    async register(newUser) {
      try {
        await axios({
          method: 'post',
          url: baseUrl + "/register",
          data: {
            username: newUser.username,
            email: newUser.email,
            password: newUser.password,
          }
        })
        this.router.push('/login')
      } catch (error) {
        console.log(error)
      }
    },
    async newDeck (name){
      try {
        const newDeck = await axios({
          method: "post",
          url: baseUrl + '/adddeck',
          data: {name},
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.getMyDeck()
      } catch (error) {
        console.log(error)
      }
    },
    async getMyDeck (){
      try {
        const decks = await axios({
          method: "get",
          url: baseUrl + '/mydecks',
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.myDecks = decks.data
      } catch (error) {
        console.log(error)
      }
    },
    async newDeck (name){
      try {
        await axios({
          method: "post",
          url:   baseUrl + '/adddeck',
          headers: {
            access_token: localStorage.access_token
          },
          data: {
            name
          }
        })
        this.getMyDeck()
      } catch (error) {
        console.log(error)
      }
    },
    async deleteDeck(deckid){
      try {
        await axios({
          method: "delete",
          url: baseUrl + '/decks/' + deckid,
          headers: {
            access_token: localStorage.access_token
          },
        })
        this.getMyDeck()
      } catch (error) {
        console.log(error)
      }
    },
    async theDeck (deckid){
      try {
        const deck = await axios({
          method: "get",
          url: baseUrl + '/decks/' + deckid,
          headers: {
            access_token: localStorage.access_token
          },
        })
        this.cardDecks = deck.data.deck.DeckCards
        this.deckName = deck.data.deck.name
        this.router.push('/editdeck/'+deckid)
      } catch (error) {
        console.log(error)
      }
    },
    async getCards(){
      try {
        const cards = await axios({
          method: "get",
          headers: {
            access_token: localStorage.access_token
          },
          url: baseUrl + '/cards',
          params: {
            id: this.query.id, name: this.query.name, type: this.query.type, atk: this.query.atk, def: this.query.def, level: this.query.level, race: this.query.race, attributes: this.query.attribute, banlist: this.query.banlist, sort: this.query.sort, frameType: this.query.frameType, desc: this.query.desc, fname: this.query.fname
          }
        })
        this.cards = cards.data
      } catch (error) {
        console.log(error)
      }
    },
    async selectCard(id){
      try {
        const cards = await axios({
          method: "get",
          headers: {
            access_token: localStorage.access_token
          },
          url: baseUrl + '/selectcard',
          params: {
            id
          }
        })
        this.selectedCard = cards.data
      } catch (error) {
        console.log(error)
      }
    },
    async editCard(deckid, cardid){
      try {
        await axios({
          method: 'post',
          url: baseUrl + '/decks/' + deckid,
          headers: {
            access_token: localStorage.access_token
          },
          data: {
            cardid
          }
        })
        this.theDeck(deckid)
      } catch (error) {
        console.log(error)
      }
    },
    async deleteCard(deckid, CardId){
      try {
        await axios({
          method: "delete",
          url: baseUrl + '/deckscard/' + deckid,
          headers: {
            access_token: localStorage.access_token
          },
          data: {
            CardId
          }
        })
        this.theDeck(deckid)
      } catch (error) {
        console.log(error)
      }
    },
    async logout() {
      localStorage.removeItem('access_token')
      this.isLogged = false
      this.router.push('/login')
    },
    async multer(){
      try {
        await axios({
          method: "post",
          url: baseUrl + '/upload'
        })
      } catch (error) {console.log(error)}
    }
  },
})