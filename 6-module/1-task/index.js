/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = document.createElement('table');
		this.render();
	}
  render() {
		this.tbody = this.rows.map((item) => `
			<tr>
				<td>${item.name}</td>
				<td>${item.age}</td>
				<td>${item.salary}</td>
				<td>${item.city}</td>
				<td><button>X</button></td>
			</tr>`);
		this.elem.innerHTML = `
			<thead>
				<tr>
					<th>Имя</th>
					<th>Возраст</th>
					<th>Зарплата</th>
					<th>Город</th>
				</tr>
			</thead>
			<tbody>
				${this.tbody}
			</tbody>`
		let buttons = this.elem.querySelectorAll('button');
		for (let btn of buttons) {
			btn.addEventListener('click', (event) => {
				event.target.closest('tr').remove();
			});
		}
	return this.elem;
	}
}

	

	
	
		

  

