window.addEventListener('load', async function () {
	const tokenContract = '0x7264c6C65c44E8613779D420D6b5FC14c8d3D7DB'
	const presaleContract = '0x1a67DA7032c90E33833aD65498048c109F8A1695'
	const maxSupply = 50000000
	let tokenRate = 0.0001176

	let connected = null
	let chainID = null
	let accounts = null
	let contract = null

	let presaleABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"constant":true,"inputs":[],"name":"Token","outputs":[{"internalType":"contract BEP20Token","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"closeSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"contribute","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"exchangeRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"funding","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isClosed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maxMintable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"}],"name":"setup","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"softCap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"rate","type":"uint256"}],"name":"updateRate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]

	let tokenABI = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"DepositEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"WithdrawEvent","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"depositToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"platformAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"preSaleAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"setPlatformAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"setPreSaleAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferTo","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]
	const init = async () => {
		// showLoader()
		console.log("OK");
		chainID = await window.ethereum.request({ method: 'eth_chainId' })
		accounts = await window.ethereum.request({ method: 'eth_requestAccounts'})
		console.log("chainID", chainID);
		if (chainID == 56 && accounts.length > 0) {
			connected = true

			window.web3 = new Web3(window.ethereum)
			contract = new window.web3.eth.Contract(presaleABI, presaleContract)
			tcontract = new window.web3.eth.Contract(tokenABI, tokenContract)

			// contract.methods
			// 	.getRewardTokenCount()
			// 	.call()
			// 	.then(function (rate) {
			// 		tokenRate = rate / 1e18
			// 	})

			tcontract.methods
				.balanceOf(accounts[0])
				.call()
				.then(function (balance) {
					document.getElementById('wallet_balance').innerText = format(balance / 1e18)
				})
		/*	contract.methods
				.totalMinted()
				.call()
				.then(function (balance) {
					document.getElementById('contract_balance_pre').innerText = format(balance / 1e18)
				})	
*/
		   contract.methods
		        .totalMinted()
				.call()
				.then(function (balance) {
					let percent = (balance / 1e18 / maxSupply) * 100;
					console.log(percent);
					document.getElementById('contract_balance_pre').innerText = format(balance / 1e18);
					document.querySelector('.percent').style.width = percent + '%';
				})
			contract.methods
				.maxMintable()
				.call()
				.then(function (balance) {
					document.getElementById('max-mintable').innerText = format(balance / 1e18)
				})	
			document.getElementById('btn_connect').innerHTML = 'Connected'
			document.getElementById('btn_connect').classList.add('connected')
			document.getElementById('inp_bnb').value = ''
			document.getElementById('inp_iii').value = ''
		} else {
			connected = false
		}

		// hideLoader()
	}

	const connect = async () => {
		let chainID = await window.ethereum.request({ method: 'eth_chainId' })
		console.log("chainID:", chainID);

		// if (chainID != 56) {
		// 	toastr('Please change network as Binance Smart Chain.')
		// 	return
		// }

		if (window.ethereum && window.ethereum.isMetaMask && window.ethereum.isConnected()) {
			// window.web3 = new Web3(window.ethereum)
			// window.ethereum.enable()
			return true
		}
		return false
	}

	const swap = async () => {
		if (connected) {
			let balance_bnb = document.getElementById('inp_bnb').value * 1e18
			if (balance_bnb >= 0.0001 * 1e8 && balance_bnb <= 2 * 1e18) {
				contract.methods
					.contribute()
					.send({ from: accounts[0], value: balance_bnb }, function (res) {
						// if (res != null) hideLoader()
					})
					.then(async function (res) {
					})

				// showLoader()
			} else {
				toastr('Please input BNB amount correctly.')
			}
		} else {
			toastr('Please connect MetaMask')
		}
	}

	const sync = (from, to, rate) => {
		document.getElementById(to).value = document.getElementById(from).value * rate
	}

	const format = (balance) => {
		balance = balance.toLocaleString(0, { minimumFractionDigits: 0 })
		return balance
	}

	const toastr = (msg) => {
		let alert_lsit = document.querySelector('.alert_list')
		let alert = document.createElement('div')

		alert.innerHTML = msg
		alert_lsit.appendChild(alert)

		setTimeout(() => {
			alert.remove()
		}, 2500)
	}

	const showLoader = () => {
	document.querySelector('.loader').classList.add('active')
 }

	const hideLoader = () => {
		document.querySelector('.loader').classList.remove('active')
	}

	window.ethereum.on('accountsChanged', (accounts) => {
		init()
	})

	window.ethereum.on('chainChanged', (chainId) => {
		window.location.reload()
	})

	document.getElementById('btn_connect').addEventListener('click', connect)
	document.getElementById('btn_swap').addEventListener('click', swap)
	document.getElementById('inp_bnb').addEventListener('keyup', () => {
		sync('inp_bnb', 'inp_iii', 1 / tokenRate)
	})
	document.getElementById('inp_iii').addEventListener('keyup', () => {
		sync('inp_iii', 'inp_bnb', tokenRate)
	})

	init()
})
